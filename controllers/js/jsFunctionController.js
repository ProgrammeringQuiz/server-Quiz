const jsFunctionService = require("../../services/js/jsFunctionService");
const mongoose = require("mongoose");


exports.getFunctionAll = async (req, res) => {
    try {
        const quiz = await jsFunctionService.getAll();
        res.json({ data: quiz, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createFunctionQuestion = async (req, res) => {
    try {

        const question = ({
            _id: new mongoose.Types.ObjectId(),
            title: req.body.title,
            question: req.body.question,
            answer: req.body.answer,
            options: req.body.options,
            questionImg: req.file.path,
        })

        const quiz = await jsFunctionService.createQuestion(question);
        res.json({ data: quiz, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};