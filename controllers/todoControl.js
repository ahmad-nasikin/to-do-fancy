const models = require('../models/Todo')
// const jwt = require('jsonwebtoken')

module.exports = {
    create: (req, res) => {
        // var headers = JSON.parse(req.headers.token)
        // console.log('ini headers', headers)
        // console.log('ini headers id', headers._id)
        models.create({
            title: req.body.title,
            content: req.body.content,
            status: req.body.status,
            creator: req.headers._id
        })
        .then(result => {
            res.send({msg: 'sukses create todo', result})
        })
        .catch(err => {
            res.send(err)
        })
    },
    getTodo: (req, res) => {
        models.find({})
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send(err)
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
    }
}