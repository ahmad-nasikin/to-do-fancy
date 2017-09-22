const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var todoSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title Tidak Boleh Kosong']
    },
    content: {
        type: String,
        required: [true, 'Content Tidak Boleh Kosong']
    },
    status: {
        type: String,
        default: 'undone'
    },
    creator: {
        type: Schema.Types.ObjectId, ref: 'User'
    }
}, {
    timestamps: true
})

var Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo