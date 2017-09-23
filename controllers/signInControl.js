const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const models = require('../models/User')


module.exports = {
    signin: (req, res) => {
        models.findOne({
            username: req.body.username || email: req.body.email
        })
        .then(result => {
            if (result != null) {
                let password = req.body.password
                if (bcrypt.compareSync(password, result.password)) {
                    let token = jwt.sign({
                        id: result.id,
                        username: result.username,
                        email: result.email
                    }, process.env.SECRET, { expiresIn: '1h' })
                    res.send({
                        msg: 'Login Success',
                        token: token
                    })
                } else {
                    res.send('invalid password')
                }
            } else {
                res.send('USer Not Found')
            }
        })
        .catch(err => {
            res.send({
                err: err.message
            })
        })
    }
}