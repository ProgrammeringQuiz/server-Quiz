const QuizModel = require("../../models/java/javaLoops")

exports.getAll = async () => {
    return QuizModel.find();
}

exports.createQuestion = async (quiz) => {
    return QuizModel.create(quiz);
};