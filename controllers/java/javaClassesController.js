const javaClassesService = require("../../services/java/javaClassesService");
const mongoose = require("mongoose");


exports.getClassAll = async (req, res) => {
    try {
        const quiz = await javaClassesService.getAll();
        res.json({ data: quiz, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createClassQuestion = async (req, res) => {
    try {
        const question = ({
            _id: new mongoose.Types.ObjectId(),
            title: req.body.title,
            question: req.body.question,
            answer: req.body.answer,
            options: req.body.options,
            questionImg: req.file.path,
        })


        const quiz = await javaClassesService.createQuestion(question);
        res.json({ data: quiz, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};