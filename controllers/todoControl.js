const models = require('../models/Todo')
const jwt = require('jsonwebtoken')

module.exports = {
    create: (req, res) => {
        let user = jwt.verify(req.headers.token, process.env.SECRET, (err, user) => {
            console.log('ini user id', user.id)
        models.create({
            title: req.body.title,
            content: req.body.content,
            status: req.body.status,
            creator: user.id
        })
        .then(result => {
            res.send({msg: 'sukses create todo', result})
        })
        .catch(err => {
            res.send(err)
        })
        })
    },
    getTodo: (req, res) => {
        let user = jwt.verify(req.headers.token, process.env.SECRET, (err, user) => {
            console.log('ini user id', user.id)
        models.find({creator: user.id})
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send(err)
        })
        })
    },
    getOne: (req, res) => {
        models.find({
            _id: req.params.id
        })
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send({
                err: err.message
            })
        })
    },
    update: (req, res) => {
        models.update({
            _id: req.params.id
        }, {
            status: req.body.status
        })
        .then(result => {
            res.send('Sukses Update')
        })
        .catch(err => {
            res.send({err: err.message})
        })
    }, 
    delete: (req, res) => {
        models.remove({

        })
    }
}