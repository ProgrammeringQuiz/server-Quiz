const express = require("express");
const multer = require('multer');


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

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "models/uploads")
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)    }
});

const upload = multer({ storage: storage });


const router = express.Router();

router.route("/variable").get(getVariableAll).post(upload.single('questionImg'),createVariableQuestion)
router.route("/function").get(getFunctionAll).post(upload.single('questionImg'), createFunctionQuestion)
router.route("/loops").get(getLoopsAll).post(upload.single('questionImg'), createLoopsQuestion)
router.route("/arrays").get(getArraysAll).post(upload.single('questionImg'), createArraysQuestion)

module.exports = router;