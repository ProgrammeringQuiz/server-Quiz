const QuizModel = require("../../models/java/javaClasses")

exports.getAll = async () => {
    return QuizModel.find();
}

exports.createQuestion = async (quiz) => {
    return QuizModel.create(quiz);
};