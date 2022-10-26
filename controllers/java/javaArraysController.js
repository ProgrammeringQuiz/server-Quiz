const javaArraysService = require("../../services/java/javaArraysService");


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
        const quiz = await javaArraysService.createQuestion(req.body);
        res.json({ data: quiz, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};