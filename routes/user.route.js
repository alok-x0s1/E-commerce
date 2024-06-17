const express = require("express");
const { signupUser } = require("../controllers/user.controller");
const router = express.Router();

router.route("/signup").post(signupUser)

module.exports = router