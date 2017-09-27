const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/to-do-fancy-nasikin');
mongoose.connect('mongodb://to-do-fancy:to-do-fancy@cluster0-shard-00-00-wtrnn.mongodb.net:27017,cluster0-shard-00-01-wtrnn.mongodb.net:27017,cluster0-shard-00-02-wtrnn.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin')

const index = require('./routes/index')
const todo = require('./routes/todo')

var app = express()

app.use(logger('dev'));
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', index)
app.use('/todo', todo)

app.listen(3000, () => {
    console.log('Listening port 3000')
})
