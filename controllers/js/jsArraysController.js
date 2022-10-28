const jsArrayService = require("../../services/js/jsArraysService");


exports.getArraysAll = async (req, res) => {
    try {
        const quiz = await jsArrayService.getAll();
        res.json({ data: quiz, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createArraysQuestion = async (req, res) => {
    try {
        const quiz = await jsArrayService.createQuestion(req.body);
        res.json({ data: quiz, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};