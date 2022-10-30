const javaVariableService = require("../../services/java/javaVariableService");
const mongoose = require("mongoose");


exports.getVariableAll = async (req, res) => {
    try {
        const quiz = await javaVariableService.getAll();
        res.json({ data: quiz, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createVariableQuestion = async (req, res) => {
    try {
        const question = ({
            _id: new mongoose.Types.ObjectId(),
            title: req.body.title,
            question: req.body.question,
            answer: req.body.answer,
            options: req.body.options,
            questionImg: req.file.path,
        })



        const quiz = await javaVariableService.createQuestion(question);
        res.json({ data: quiz, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};