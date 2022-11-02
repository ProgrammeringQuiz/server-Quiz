const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const javaArraySchema = new Schema({
    title: String,
    question: String,
    questionImg: {
        type: String
    },
    answer: Number,
    options: [String]
}, {collection: 'java-arrays'});

module.exports = mongoose.model("java-arrays", javaArraySchema);