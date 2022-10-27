const express = require("express");
const {
    getUserAll,
    createUser,
    getUserById
} = require("../../controllers/user/userController");


const router = express.Router();

router.route("/").get(getUserAll).post(createUser)
router.route("/:id").get(getUserById)

module.exports = router;