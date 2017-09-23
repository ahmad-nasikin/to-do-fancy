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
          var token = jwt.sign({id: result.id, username: result.username, email: result.email}, process.env.SECRET)
          res.send(token)
        } else {
          res.send('invalid password')
        }
      } else {
        res.send('username tidak ada')
      }
    })
    .catch(err => {
      res.send(err)
    })
  }
}