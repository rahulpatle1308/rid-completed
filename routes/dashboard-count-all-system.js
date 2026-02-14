const express = require("express");
const router = express.Router();

const TeacherTest = require("../models/teacherTestModel");
const Student = require("../models/Student");

router.get("/stats/:teacherId", async (req, res) => {
    try {
        const teacherId = req.params.teacherId;

        // 1. Total tests
        const tests = await TeacherTest.find({ teacher: teacherId });

        const totalTests = tests.length;

        // 2. Total students
        const totalStudents = await Student.countDocuments({
            teacherId: teacherId
        });

        // 3. Total attempts
        const students = await Student.find({ teacherId });

        let totalAttempts = 0;
        students.forEach(s => {
            s.assignedTests.forEach(t => {
                if (t.status === "completed") {
                    totalAttempts++;
                }
            });
        });

        // 4. Active templates = unique subjects
        const subjectSet = new Set();
        tests.forEach(t => {
            if (t.subject) {
                subjectSet.add(t.subject.toLowerCase());
            }
        });

        const totalTemplates = subjectSet.size;

        res.json({
            totalTests,
            totalStudents,
            totalAttempts,
            totalTemplates
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
