const mongoose = require('mongoose');
const db = require('../controllers/db');

const Schema = mongoose.Schema;

const bookschema = new Schema({
    title: {
        type:String,
        required: true
    },
    isbn: {
        type: Number,
    },
    author: {
        type:String,
        required: true
    }
});

const bookmodel = db.model('books',bookschema);
module.exports = bookmodel;
