const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const javaArraySchema = new Schema({
    question: String,
    img: {
        data: Buffer,
        contentType: String
    },
    answer: Number,
    options: [String]
}, {collection: 'java-arrays'});

module.exports = mongoose.model("java-arrays", javaArraySchema);