const express = require("express");
const {
  logIn,
  signUp,
  sendOTP,
  changePassword,
} = require("../controllers/Auth");
const { auth } = require("../middlewares/auth");
const {
  resetPasswordToken,
  resetPassword,
} = require("../controllers/ResetPassword");
const router = express.Router();

router.post("/login", logIn);
router.post("/signup", signUp);
router.post("/sendOtp", sendOTP);
router.post("/changePassword", auth, changePassword);

router.post("/reset-password-token", resetPasswordToken);
router.post("/reset-password", resetPassword);

module.exports = router;
