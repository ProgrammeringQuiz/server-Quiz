const express = require("express");
const {
    getVariableAll,
    createVariableQuestion
} = require("../../controllers/java/javaVariableController");

const {
    getMethodAll,
    createMethodQuestion
} = require("../../controllers/java/javaMethodController")

const {
    getLoopsAll,
    createLoopsQuestion
} = require("../../controllers/java/javaLoopsController")



const router = express.Router();

router.route("/variable").get(getVariableAll).post(createVariableQuestion)
router.route("/method").get(getMethodAll).post(createMethodQuestion)
router.route("/loops").get(getLoopsAll).post(createLoopsQuestion)


module.exports = router;