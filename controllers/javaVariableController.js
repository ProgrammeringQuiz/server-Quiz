const quizService = require("../services/javaVariableService");


exports.getAll = async (req, res) => {
    try {
        const quiz = await quizService.getAll();
        res.json({ data: quiz, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createQuestion = async (req, res) => {
    try {
        const quiz = await quizService.createQuestion(req.body);
        res.json({ data: quiz, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};