const express = require("express");
const router = express.Router();
const TeacherTest = require("../models/teacherTestModel");
const jwt = require("jsonwebtoken");

// Create Test
router.post("/create-test", async (req, res) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const newTest = new TeacherTest({
      teacher: decoded.userId,
      ...req.body
    });

    await newTest.save();
    res.json({ success: true, test: newTest });

  } catch (err) {
    console.log("Create Test Error:", err);
    res.status(500).json({ success: false });
  }
});

// Get all tests of teacher
router.get("/my-tests", async (req, res) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const tests = await TeacherTest.find({ teacher: decoded.userId });
    res.json(tests);

  } catch (err) {
    console.log("Fetch Test Error:", err);
    res.status(500).json([]);
  }
});

module.exports = router;
