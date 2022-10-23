const express = require("express");
const {
    getAll,
    createBlog
} = require("../controllers/QuizController");

const router = express.Router();

router.route("/").get(getAll).post(createBlog)

module.exports = router;