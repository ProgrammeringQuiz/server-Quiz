const userModel = require("../../models/user/user")



exports.getAll = async () => {
    return userModel.find();
}

exports.createUser = async (user) => {
    return userModel.create(user);
};

exports.getUserById = async (id) => {
    return userModel.findById(id);
};

exports.updateUser = async (id, user) => {
    return userModel.findByIdAndUpdate(id, user);
};