const jsVariableService = require("../../services/js/jsVariableService");


exports.getVariableAll = async (req, res) => {
    try {
        const quiz = await jsVariableService.getAll();
        res.json({ data: quiz, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createVariableQuestion = async (req, res) => {
    try {
        const quiz = await jsVariableService.createQuestion(req.body);
        res.json({ data: quiz, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};