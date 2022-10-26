const javaLoopsService = require("../../services/java/javaLoopsService");


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
        const quiz = await javaLoopsService.createQuestion(req.body);
        res.json({ data: quiz, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};