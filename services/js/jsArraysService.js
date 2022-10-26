const QuizModel = require("../../models/js/jsArrays")

exports.getAll = async () => {
    return QuizModel.find();
}

exports.createQuestion = async (quiz) => {
    return QuizModel.create(quiz);
};