const javaArraysService = require("../../services/java/javaArraysService");
const mongoose = require("mongoose");


exports.getArraysAll = async (req, res) => {
    try {
        const quiz = await javaArraysService.getAll();
        res.json({ data: quiz, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createArraysQuestion = async (req, res) => {
    try {
        const question = ({
            _id: new mongoose.Types.ObjectId(),
            title: req.body.title,
            question: req.body.question,
            answer: req.body.answer,
            options: req.body.options,
            questionImg: req.file.path,
        })

        const quiz = await javaArraysService.createQuestion(question);
        res.json({ data: quiz, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};