const express = require("express");
const { addUser } = require("../Controllers/userController.");
const { login } = require("../Controllers/login");

const router = express.Router();

router.post("/registration", addUser); //https://jobbackend-pi.vercel.app/registration
router.post("/login", login); //https://jobbackend-pi.vercel.app/login

module.exports = router;
