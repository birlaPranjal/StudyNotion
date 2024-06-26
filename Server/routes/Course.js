const express = require("express");
const {
  isInstructor,
  auth,
  isAdmin,
  isStudent,
} = require("../middlewares/auth");
const {
  createCourse,
  showAllCourses,
  getCourseDetails,
} = require("../controllers/Course");
const {
  createSection,
  updateSection,
  deleteSection,
} = require("../controllers/Section");
const { createSubSection } = require("../controllers/SubSection");
const {
  createCategory,
  showAllCategories,
  categoryPageDetails,
} = require("../controllers/Categories");
const {
  createRating,
  getAverageRating,
  getAllRating,
} = require("../controllers/RatingAndReviews");
const router = express.Router();

router.post("/createCourse", auth, isInstructor, createCourse);
router.post("/addSection", auth, isInstructor, createSection);
router.post("/updateSection", auth, isInstructor, updateSection);
router.post("/deleteSection", auth, isInstructor, deleteSection);
// router.post("/updateSubSection", auth, isInstructor, updateSubSection );
// router.post("/deleteSubSection", auth, isInstructor, deleteSubSection);
router.post("/addSubSection", auth, isInstructor, createSubSection);
router.get("/getAllCourses", showAllCourses);
router.get("/getAllCourses", getCourseDetails);

router.post("/createCategory", auth, isAdmin, createCategory);
router.get("showAllCategory", showAllCategories);
router.post("getCategoryPageDetails", categoryPageDetails);

router.post("/createRating", auth, isStudent, createRating);
router.get("/getAverageRating", getAverageRating);
router.get("/getReview", getAllRating);

module.exports = router;
