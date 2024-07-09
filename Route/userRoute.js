const express = require("express");
const { addUser } = require("../Controllers/userController.");
const { login } = require("../Controllers/login");

const router = express.Router();

router.post("/registration", addUser); //http://localhost:5000/registration
router.post("/login", login); //http://localhost:5000/login

module.exports = router;
