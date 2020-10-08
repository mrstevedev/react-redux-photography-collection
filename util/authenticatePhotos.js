module.exports = function authenticatePhotos(req, res, next) {
    if (req.headers['requestapi']) {
       // custom header exists, then call next() to pass to the next function
       next();
    } else {
      res.sendStatus(401);
    }
  }