const bcrypt = require('bcryptjs')
const models = require('../models/User')

module.exports = {
    signup: (req, res) => {
        let password = req.body.password
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash("password", salt, function(err, hash) {
                // Store hash in your password DB. 
                models.create({
                    username: req.body.username,
                    email: req.body.email,
                    password: hash
                })
                .then(result => {
                    res.send({
                        msg: 'Success Sign Up'
                    })
                })
                .catch(err => {
                    res.send({
                        err: err.msg
                    })
                })
            })
        })
    }
}