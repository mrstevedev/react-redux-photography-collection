const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const creds = require('./config');
const api = require('./routes/routes');
const dotenv = require('dotenv');
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require('./config/db');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const multer = require('multer');

// Load env vars
dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

// add middlewares
app.use(express.static(path.join(__dirname, "build")));

// Add avatar dir/
app.use('./public/img/avatar', express.static('avatar'));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Passport config 
require('./config/passport')(passport);

app.use(morgan('dev'));
app.use(helmet());

app.use(cors({
  origin: 'http://localhost:4000',
  credentials: true
}))
app.use(express.json())
app.use('/', router)
app.use('/api', api)

// router.use('/api/photo', authenticateGetPhotos, (req, res) => {
//   res.status(200).json(api)
// })

router.post('/api/user', authenticateToken, (req, res) => {
  const { email, location, avatarIcon } = req.body;
  console.log(avatarIcon);
  User.updateOne({ 
    email: email, 
    location: location,
    avatarIcon: avatarIcon
  }).then(response => res.json({ message: 'successfully updated', email, location, avatarIcon }) )
  .catch(err => console.log(err));
});

router.post('/signin', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if(err) throw err;
    if(!user) res.json({ message: 'Username and or password incorrect' , user: null })
    else {
      req.logIn(user, err => {
        if(err) throw err;
        jwt.sign({ user }, 'secret', { expiresIn: '1h' }, (err, token) => {
          res.status(200)
            .json({ 
              message: 'Successfully Authenticated',
              user: req.user,
              jwt: token
          })
        })
      })
    }
  })(req, res, next)
})


app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

function authenticateGetPhotos(req, res, next) {
  if (req.headers['requestapi']) {
     // custom header exists, then call next() to pass to the next function
     next();
  } else {
    res.sendStatus(403);
  }
}

// Middleware function to protect/authenticate routes from requests
// Not containing or containing a JWT token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if(token == null) return res.sendStatus(401)

  jwt.verify(token, 'secret', (err, user) => {
    if(err) return res.sedStatus(403)
    req.user = user
    next()
  })
}

let transport = {
  host: 'smtp.gmail.com', // Don’t forget to replace with the SMTP host of your provider
  port: 587,
  auth: {
  user: creds.USER,
  pass: creds.PASS
}
}

let transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
if (error) {
  console.log(error);
} else {
  console.log('Server is ready to take messages');
}
});

router.post('/success', (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;
  let content = `name: ${name} \n email: ${email} \n message: ${message}`;

  let mail = {
    from: name,
    to: email,  // Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content,
    html: `<table style="width: 100%; background: #f7f7f7;padding: .5rem;">
      <tr>
        <td style="padding: 1rem;background: #fff; font-family: system-ui;font-size:.8rem;color:#333;font-weight: bold;">Name:</td>
        <td style="padding: 1rem;background: #fff; font-family: system-ui;font-size:.8rem;color:#333;font-weight: bold;">${name}</td>
      </tr>
      <tr>
        <td style="padding: 1rem;background: #fff; font-family: system-ui;font-size:.8rem;color:#333;font-weight: bold;">Email:</td>
        <td style="padding: 1rem;background: #fff; font-family: system-ui;font-size:.8rem;color:#333;font-weight: bold;">${email}</td>
      </tr>
      <tr>
        <td style="padding: 1rem;background: #fff; font-family: system-ui;font-size:.8rem;color:#333;font-weight: bold;">Message:</td>
        <td style="padding: 1rem;background: #fff; font-family: system-ui;font-size:.8rem;color:#333;font-weight: bold;">${message}</td>
      </tr>
    </table>`
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
  res.send('success');
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));