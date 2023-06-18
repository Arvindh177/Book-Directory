const mongoose = require('mongoose');

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

export default mongoose.model("Book",bookschema);