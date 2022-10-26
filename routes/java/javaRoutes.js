const express = require("express");
const {
    getVariableAll,
    createVariableQuestion
} = require("../../controllers/java/javaVariableController");

const {
    getClassAll,
    createClassQuestion
} = require("../../controllers/java/javaClassesController")

const {
    getLoopsAll,
    createLoopsQuestion
} = require("../../controllers/java/javaLoopsController")

const {
    getArraysAll,
    createArraysQuestion
} = require("../../controllers/java/javaArraysController")
const {get} = require("mongoose");



const router = express.Router();

router.route("/variable").get(getVariableAll).post(createVariableQuestion)
router.route("/class").get(getClassAll).post(createClassQuestion)
router.route("/loops").get(getLoopsAll).post(createLoopsQuestion)
router.route("/arrays").get(getArraysAll).post(createArraysQuestion)


module.exports = router;