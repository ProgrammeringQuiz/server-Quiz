const quizService = require("../services/QuizService");


exports.getAll = async (req, res) => {
    try {
        const quizs = await quizService.getAll();
        res.json({ data: quizs, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createBlog = async (req, res) => {
    try {
        const quizs = await quizService.createBlog(req.body);
        res.json({ data: quizs, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};