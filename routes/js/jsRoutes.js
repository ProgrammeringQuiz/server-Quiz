const express = require("express");
const {
    getVariableAll,
    createVariableQuestion
} = require("../../controllers/js/jsVariableController");

const router = express.Router();

router.route("/variable").get(getVariableAll).post(createVariableQuestion)

module.exports = router;