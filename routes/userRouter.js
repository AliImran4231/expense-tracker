const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/authentication");

const {
  registerUser,
  loginUser,
  getToken,
} = require("../controllers/userContr");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", auth, getToken);

module.exports = router;
