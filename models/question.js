const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    question: String,
    answer: Number,
    options: [String]
});

module.exports = mongoose.model("testJava", questionSchema);