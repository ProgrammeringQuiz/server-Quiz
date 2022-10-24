const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const javaMethodSchema = new Schema({
    question: String,
    answer: Number,
    options: [String]
}, {collection: 'java-method'});

module.exports = mongoose.model("java-method", javaMethodSchema);