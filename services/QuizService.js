const QuizModel = require("../models/question")

exports.getAll = async () => {
    return QuizModel.find();
}

exports.createBlog = async (quiz) => {
    return QuizModel.create(quiz);
};