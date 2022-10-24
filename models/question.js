const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    question: String,
    answer: Number,
    options: [String]
}, {collection: 'java-variable'});

module.exports = mongoose.model("java-variable", questionSchema);