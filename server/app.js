const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/to-do-fancy-nasikin');

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