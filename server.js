const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const creds = require('./config');
const photos = require('./api/photos.json');
const dotenv = require('dotenv');
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require('./config/db');
const passport = require('passport');
const jwt = require('jsonwebtoken');

// Load env vars
dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Passport config 
require('./config/passport')(passport);

app.use(morgan('dev'));
app.use(helmet());

app.use(cors({
  origin: 'http://localhost:9000',
  credentials: true
}))
app.use(express.json())
app.use('/contact', router)
app.use('/', router)

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

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

router.get('/api/photo', (req, res) => {
  res.json(photos)
})

router.post('/signin', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if(err) throw err;
    if(!user) res.json({ message: 'Username and or password incorrect' , user: null })
    else {
      req.logIn(user, err => {
        if(err) throw err;

        res.status(200).json({ message: 'Successfully Authenticated', user: req.user })
      })
    }
  })(req, res, next)
})

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

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));