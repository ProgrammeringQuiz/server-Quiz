const jsFunctionService = require("../../services/js/jsFunctionService");


exports.getFunctionAll = async (req, res) => {
    try {
        const quiz = await jsFunctionService.getAll();
        res.json({ data: quiz, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createFunctionQuestion = async (req, res) => {
    try {
        const quiz = await jsFunctionService.createQuestion(req.body);
        res.json({ data: quiz, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};