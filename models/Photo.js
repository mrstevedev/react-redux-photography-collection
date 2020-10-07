const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
    href: {
        type: String,
    },
    title: {
        type: String
    },
    location: {
        type: String
    },
    camera: {
        type: String
    },
    imagePath: {
        type: String
    }
});

const Photo = mongoose.model('Photo', PhotoSchema);
module.exports = Photo;