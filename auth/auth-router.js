const router = require("express").Router();
const bcrypt = require("bcryptjs");

const signToken = require("../token/token.js");

router.post("/register", (req, res) => {});

router.post("/login", (req, res) => {
  // implement login
});

module.exports = router;
