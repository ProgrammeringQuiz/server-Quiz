const express = require("express");
const {
    getAll,
    createQuestion
} = require("../controllers/javaVariableController");

const router = express.Router();

router.route("/").get(getAll).post(createQuestion)

module.exports = router;