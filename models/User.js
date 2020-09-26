const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: 'First name is required'
    },
    lastName: {
        type: String,
        required: 'Passport is required'
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
