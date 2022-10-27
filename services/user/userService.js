const userModel = require("../../models/user/user")

exports.getAll = async () => {
    return userModel.find();
}

exports.createUser = async (quiz) => {
    return userModel.create(quiz);
};