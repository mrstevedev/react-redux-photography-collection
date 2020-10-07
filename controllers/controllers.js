const Photo = require("../models/Photo");

const getAPI = (req, res, next) => {
  Photo.find()
    .then((photos) => {
      res.status(200).json(photos);
    })
    .catch((err) => console.log(err));
};

module.exports.getAPI = getAPI;
