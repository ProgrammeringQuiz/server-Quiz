const express = require("express");
const {
    getVariableAll,
    createVariableQuestion
} = require("../controllers/javaVariableController");

const {
    getMethodAll,
    createMethodQuestion
} = require("../controllers/javaMethodController")


const router = express.Router();

router.route("/variable").get(getVariableAll).post(createVariableQuestion)
router.route("/method").get(getMethodAll).post(createMethodQuestion)

module.exports = router;