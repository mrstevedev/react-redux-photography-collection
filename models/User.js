const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: 'First name is required'
    },
    password: {
        type: String,
        required: 'Passport is required'
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
