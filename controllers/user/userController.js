const userService = require("../../services/user/userService");
const mongoose = require("mongoose");


exports.getUserAll = async (req, res) => {
    try {
        const user = await userService.getAll();
        res.json({ data: user, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createUser = async (req, res)  => {
    try {
        const userTest = ({
            _id: new mongoose.Types.ObjectId(),
            fName: req.body.fName,
            lName: req.body.lName,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            profileImage: req.file.path,
            quizHistory: req.body.quizHistory
        })
        const user = await userService.createUser(userTest);
        res.json({ data: user, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        res.json({ data: user, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const user = await userService.updateUser(req.params.id, {$push:{"quizHistory": req.body.quizHistory}});
        res.json({data: user, status: "success"});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};