const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jsArraysSchema = new Schema({
    question: String,
    img: {
        data: Buffer,
        contentType: String
    },
    answer: Number,
    options: [String]
}, {collection: 'js-arrays'});

module.exports = mongoose.model("js-arrays", jsArraysSchema);