const express = require("express");
const multer = require('multer');
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

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'models/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
    }
});

const upload = multer({ storage: storage });

const router = express.Router();

router.route("/variable").get(getVariableAll).post( upload.single('questionImg'),createVariableQuestion)
router.route("/class").get(getClassAll).post(upload.single('questionImg'),createClassQuestion)
router.route("/loops").get(getLoopsAll).post(upload.single('questionImg'),createLoopsQuestion)
router.route("/arrays").get(getArraysAll).post(upload.single('questionImg'),createArraysQuestion)


module.exports = router;