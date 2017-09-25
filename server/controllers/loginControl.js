const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const models = require('../models/User')


module.exports = {
  login: (req, res) => {
    models.findOne({
      username: req.body.username
    })
    .then(result => {
      if (result != null) {
        let password = req.body.password
        if (bcrypt.compareSync(password, result.password)) {
          let token = jwt.sign({
            id: result.id,
            username: result.username,
            email: result.email
          }, process.env.SECRET)
          console.log('ini token', token)
          res.send({
            msg: 'Succes login',
            token: token
          })
        } else {
          res.send('Password Salah')
        }
      } else {
        res.send('Username Tidak Ada')
      }
    })
  }
}