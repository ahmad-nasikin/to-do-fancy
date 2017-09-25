const express = require('express')
const router = express.Router()
const userController = require('../controllers/userControl')
const signUpController = require('../controllers/signUpControl')
const signInController = require('../controllers/loginControl')

router.post('/signup', signUpController.signup)
router.get('/users', userController.getDataUser)
router.delete('/:id', userController.delete)
router.post('/signin', signInController.login)

module.exports = router