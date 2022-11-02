const javaLoopsService = require("../../services/java/javaLoopsService");
const mongoose = require("mongoose");


exports.getLoopsAll = async (req, res) => {
    try {
        const quiz = await javaLoopsService.getAll();
        res.json({ data: quiz, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createLoopsQuestion = async (req, res) => {
    try {
        const question = ({
            _id: new mongoose.Types.ObjectId(),
            title: req.body.title,
            question: req.body.question,
            answer: req.body.answer,
            options: req.body.options,
            questionImg: req.file.path,
        })

        const quiz = await javaLoopsService.createQuestion(question);
        res.json({ data: quiz, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};