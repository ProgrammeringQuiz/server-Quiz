const express = require("express");
const {
    getUserAll,
    createUser
} = require("../../controllers/user/userController");


const router = express.Router();

router.route("/user").get(getUserAll).post(createUser)

module.exports = router;