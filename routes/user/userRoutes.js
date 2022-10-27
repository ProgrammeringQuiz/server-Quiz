const express = require("express");
const multer = require('multer');
const {
    getUserAll,
    createUser,
    getUserById,
    updateUser
} = require("../../controllers/user/userController");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'models/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + file.originalname)
    }
});

const upload = multer({ storage: storage });


const router = express.Router();

router.route("/").get(getUserAll).post( upload.single('profileImage'), createUser)
router.route("/:id").get(getUserById).put(updateUser)

module.exports = router;