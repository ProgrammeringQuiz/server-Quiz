const userModel = require("../../models/user/user")

exports.getAll = async () => {
    return userModel.find();
}

exports.createQuestion = async (quiz) => {
    return userModel.create(quiz);
};