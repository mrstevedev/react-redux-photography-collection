// const api = require("../api/photos.json");
const Photo = require("../models/Photo");
const passport = require('passport');
const jwt = require('jsonwebtoken');

const getAPI = (req, res, next) => {
  //   res.status(200).json(api);
  Photo.find()
    .then((photos) => {
      res.status(200).json(photos);
    }).catch((err) => res.status(400).json({ error: err }));
};

const signIn = (req, res, next) => {
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
}

module.exports = {
  getAPI,
  signIn
};
