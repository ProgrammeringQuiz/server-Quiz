const javaMethodService = require("../services/javaMethodService");


exports.getMethodAll = async (req, res) => {
    try {
        const quiz = await javaMethodService.getAll();
        res.json({ data: quiz, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createMethodQuestion = async (req, res) => {
    try {
        const quiz = await javaMethodService.createQuestion(req.body);
        res.json({ data: quiz, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};