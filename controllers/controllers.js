// const api = require("../api/photos.json");
const Photo = require("../models/Photo");

const getAPI = (req, res, next) => {
  //   res.status(200).json(api);
  Photo.find()
    .then((photos) => {
      res.status(200).json(photos);
    }).catch((err) => res.status(400).json({ error: err }));
};

module.exports.getAPI = getAPI;
