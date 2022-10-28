const javaVariableService = require("../../services/java/javaVariableService");


exports.getVariableAll = async (req, res) => {
    try {
        const quiz = await javaVariableService.getAll();
        res.json({ data: quiz, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createVariableQuestion = async (req, res) => {
    try {
        const quiz = await javaVariableService.createQuestion(req.body);
        res.json({ data: quiz, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};