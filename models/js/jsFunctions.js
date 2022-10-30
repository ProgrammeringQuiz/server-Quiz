const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jsFunctionSchema = new Schema({
    title: String,
    question: String,
    img: {
        data: Buffer,
        contentType: String
    },
    answer: Number,
    options: [String]
}, {collection: 'js-function'});

module.exports = mongoose.model("js-function", jsFunctionSchema);