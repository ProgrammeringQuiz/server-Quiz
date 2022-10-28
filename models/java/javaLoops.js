const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const javaLoopsSchema = new Schema({
    question: String,
    img: {
        data: Buffer,
        contentType: String
    },
    answer: Number,
    options: [String]
}, {collection: 'java-loops'});

module.exports = mongoose.model("java-loops", javaLoopsSchema);