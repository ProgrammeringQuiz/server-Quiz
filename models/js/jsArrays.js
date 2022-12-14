const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jsArraysSchema = new Schema({
    title: String,
    question: String,
    questionImg: {
        type: String
    },
    answer: Number,
    options: [String]
}, {collection: 'js-arrays'});

module.exports = mongoose.model("js-arrays", jsArraysSchema);