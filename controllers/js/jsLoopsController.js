const jsLoopsService = require("../../services/js/jsLoopsService");


exports.getLoopsAll = async (req, res) => {
    try {
        const quiz = await jsLoopsService.getAll();
        res.json({ data: quiz, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createLoopsQuestion = async (req, res) => {
    try {
        const quiz = await jsLoopsService.createQuestion(req.body);
        res.json({ data: quiz, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};