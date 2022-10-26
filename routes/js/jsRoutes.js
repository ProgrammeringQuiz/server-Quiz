const express = require("express");
const {
    getVariableAll,
    createVariableQuestion
} = require("../../controllers/js/jsVariableController");

const {
    getFunctionAll,
    createFunctionQuestion
} = require("../../controllers/js/jsFunctionController");

const router = express.Router();

router.route("/variable").get(getVariableAll).post(createVariableQuestion)
router.route("/function").get(getFunctionAll).post(createFunctionQuestion)

module.exports = router;