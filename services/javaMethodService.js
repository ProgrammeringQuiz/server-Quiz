const QuizModel = require("../models/javaMethods")

exports.getAll = async () => {
    return QuizModel.find();
}

exports.createQuestion = async (quiz) => {
    return QuizModel.create(quiz);
};