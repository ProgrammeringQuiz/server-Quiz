const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const javaClassSchema = new Schema({
    title: String,
    question: String,
    img: {
        data: Buffer,
        contentType: String
    },
    answer: Number,
    options: [String]
}, {collection: 'java-class'});

module.exports = mongoose.model("java-class", javaClassSchema);