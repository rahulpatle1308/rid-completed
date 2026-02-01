const express = require("express");
const router = express.Router();
const ensureTeacher = require("../middleware/authMiddleware");

const {
  getTestRankingList,
  getTestStudentDetails
} = require("../controllers/teacherAnalyticsController");

router.use(ensureTeacher);

// Analytics main page – test ranking
router.get("/tests", getTestRankingList);

// Details button – student ranking inside test
router.get("/test/:testId/details", getTestStudentDetails);

module.exports = router;
