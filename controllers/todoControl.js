const models = require('../models/User')

module.exports = {
    create: (req, res) => {
        console.log('ini headers', headers._id)
        console.log('isi body', req.body)
        models.create({
            title: req.body.title,
            content: req.body.content,
            status: req.body.status,
            creator: req.headers._id
        })
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send(err)
        })
    }
}