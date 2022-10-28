const javaClassesService = require("../../services/java/javaClassesService");


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
        const quiz = await javaClassesService.createQuestion(req.body);
        res.json({ data: quiz, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};