const express = require("express");
const { auth } = require("../middlewares/auth");
const {
  getAllUserDetails,
  updateProfile,
  deleteAccount,
} = require("../controllers/Profile");
const router = express.Router();

router.get("/allUsersDetails", auth, getAllUserDetails);
router.put("/profile", auth, updateProfile);
router.delete("/account", auth, deleteAccount);


// router.get("/getEnrolledCourses", auth, getEnrolledCourses);
// router.put("/updateDisplayPicture", auth, updateDisplayPicture);

module.exports = router;
