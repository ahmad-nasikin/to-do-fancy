const mongoose = require('mongoose');
const Schema = mongoose.Schema

var userSchema = new Schema({
    username: {
        type: String, 
        required: [true, 'Username Tidak Boleh Kosong'] 
    },
    email: {
        type: String,
        required: [true, 'Email Tidak Boleh Kosong']
    },
    password: {
        type: String,
        required: [true, 'Password Tidak Boleh Kosong']
    }
}, {
    timestamps: true
})

var User = mongoose.model('User', userSchema)

module.exports = User