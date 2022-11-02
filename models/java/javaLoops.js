const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const javaLoopsSchema = new Schema({
    title: String,
    question: String,
    questionImg: {
        type: String
    },
    answer: Number,
    options: [String]
}, {collection: 'java-loops'});

module.exports = mongoose.model("java-loops", javaLoopsSchema);