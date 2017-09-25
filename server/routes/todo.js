const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todoControl')
const auth = require('../helper/auth')

router.post('/', auth.authUser, todoController.create)
router.get('/', auth.authUser, todoController.getTodo)
// router.get('/:id', auth.authUser, todoController.getOne)
router.put('/:id', auth.authUser, auth.authByid, todoController.update)
router.delete('/:id', auth.authUser, auth.authByid, todoController.delete )

module.exports = router