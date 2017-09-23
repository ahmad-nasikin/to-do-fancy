const express = require('express')
const router = express.Router()
const userController = require('../controllers/userControl')
const signUpController = require('../controllers/signUpControl')

router.post('/signup', signUpController.signup)
router.get('/users', userController.getDataUser)

module.exports = router