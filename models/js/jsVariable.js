const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jsVariableSchema = new Schema({
    title: String,
    question: String,
    questionImg: {
        type: String
    },
    answer: Number,
    options: [String]
}, {collection: 'js-variable'});

module.exports = mongoose.model("js-variable", jsVariableSchema);