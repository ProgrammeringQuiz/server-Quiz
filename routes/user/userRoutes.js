const express = require("express");
const multer = require('multer');
const verify = require("../authVerify")
const User = require("../../models/user/user")


const {
    getUserAll,
    createUser,
    getUserById,
    updateUser,
    signIn
} = require("../../controllers/user/userController");


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

router.route("/", ).get(getUserAll).post( upload.single('profileImage'), createUser)
router.route("/:id").get(verify,getUserById).put(updateUser)
router.route("/signIn").post(signIn)

router.get("/all", verify, async (req, res) => {
    try{
        const result = await User.find().exec();
        res.send(result);
    }catch (error){
        res.status(500).send(error);
    }
});

module.exports = router;