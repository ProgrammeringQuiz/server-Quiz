const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jsLoopsSchema = new Schema({
    title: String,
    question: String,
    questionImg: {
        type: String
    },
    answer: Number,
    options: [String]
}, {collection: 'js-loops'});

module.exports = mongoose.model("js-loops", jsLoopsSchema);