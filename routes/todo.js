const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todoControl')
const auth = require('../helper/auth')

router.post('/', auth.authUser, todoController.create)

module.exports = router