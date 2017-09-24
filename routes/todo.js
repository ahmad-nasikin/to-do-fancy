const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todoControl')

router.post('/', todoController.create)

module.exports = router