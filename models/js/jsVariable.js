const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jsVariableSchema = new Schema({
    question: String,
    img: {
        data: Buffer,
        contentType: String
    },
    answer: Number,
    options: [String]
}, {collection: 'js-variable'});

module.exports = mongoose.model("js-variable", jsVariableSchema);