const models = require('../models/User');
const bcrypt = require('bcryptjs')

module.exports = {
    getDataUser: (req, res) => {
        models.find({})
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send(err)
        })
    },
    getOneUser: (req, res) => {
        models.find({
            _id: req.params.id
        })
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send(err)
        })
    },
    update: (req, res) => {
        let password = req.body.password
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash("password", salt, (err, hash) => {
                // Store hash in your password DB. 
                _id: req.params.id
            }, {
                username: req.body.username,
                email: req.params.email,
                password: hash
            })
            .then(result => {
                res.send({
                    msg: 'Success Update User'
                })
            })
            .catch(err => {
                res.send({
                    err: err.message
                })
            })
        });
    },
    delete: (req, res) => {
        models.remove({
            _id: req.params.id
        })
        .then(result => {
            res.send('Berhasil Delete User')
        })
        .catch(err => {
            res.send(err)
        })
    }
}