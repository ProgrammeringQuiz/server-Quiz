const userModel = require("../../models/user/user")

exports.getAll = async () => {
    return userModel.find();
}

exports.createUser = async (quiz) => {
    return userModel.create(quiz);
};

exports.getUserById = async (id) => {
    return userModel.findById(id);
};

exports.updateUser = async (id, blog) => {
    return userModel.findByIdAndUpdate(id, blog);
};