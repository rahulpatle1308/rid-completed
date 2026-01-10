const express = require("express");
const router = express.Router();
const CourseVisit = require("../models/CourseVisit");

/**
 * ✅ GET ALL VISITS
 * URL: /api/course/visits
 */
router.get("/visits", async (req, res) => {
  try {
    const courses = await CourseVisit.find({});
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch visits" });
  }
});

/**
 * ✅ TRACK VISIT (INCREMENT)
 * URL: /api/course/visit
 */
router.post("/visit", async (req, res) => {
  const { courseId, courseName } = req.body;

  if (!courseId || !courseName) {
    return res.status(400).json({ error: "Missing course data" });
  }

  try {
    let course = await CourseVisit.findOne({ courseId });

    if (!course) {
      course = new CourseVisit({
        courseId,
        courseName,
        visitCount: 1
      });
    } else {
      course.visitCount += 1;
    }

    await course.save();

    res.json({
      courseId: course.courseId,
      visitCount: course.visitCount
    });
  } catch (err) {
    res.status(500).json({ error: "Visit update failed" });
  }
});

module.exports = router;
