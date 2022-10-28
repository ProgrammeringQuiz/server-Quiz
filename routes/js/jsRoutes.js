const express = require("express");
const {
    getVariableAll,
    createVariableQuestion
} = require("../../controllers/js/jsVariableController");

const {
    getFunctionAll,
    createFunctionQuestion
} = require("../../controllers/js/jsFunctionController");
const {
    getLoopsAll,
    createLoopsQuestion
} = require("../../controllers/js/jsLoopsController");

const {
    getArraysAll,
    createArraysQuestion
} = require("../../controllers/js/jsArraysController");

const router = express.Router();

router.route("/variable").get(getVariableAll).post(createVariableQuestion)
router.route("/function").get(getFunctionAll).post(createFunctionQuestion)
router.route("/loops").get(getLoopsAll).post(createLoopsQuestion)
router.route("/arrays").get(getArraysAll).post(createArraysQuestion)

module.exports = router;