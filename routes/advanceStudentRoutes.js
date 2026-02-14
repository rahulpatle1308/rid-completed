const express = require("express");
const router = express.Router();

const TeacherTest = require("../models/teacherTestModel");
const Student = require("../models/Student");
const TestAttempt = require("../models/TestAttempt");


// =================================================
// OPEN EMAIL PAGE
// =================================================
router.get("/open/:testId", async (req, res) => {
    try {
        const testId = req.params.testId;

        // console.log("Opening test with ID:", testId);

        res.render(
            "tracher_deshboard/advance-version/sendtestprocess/enterEmail",
            { testId }
        );
    } catch (err) {
        console.error(err);
        res.send("Error opening test");
    }
});


// =================================================
// STEP 1 → CHECK EMAIL
router.post("/check-email", async (req, res) => {
    try {
        const { email, testId } = req.body;

        const test = await TeacherTest.findById(testId);
        if (!test) return res.send("Test not found");

        // Find student
        let student = await Student.findOne({
            email,
            teacherId: test.teacher
        });

        // If student exists → start test
        if (student) {
            return res.redirect(
                `/advance-student/check-attempt/${student._id}/${testId}`
            );
        }

        // If student not found → show register form
        res.render(
            "tracher_deshboard/advance-version/sendtestprocess/registerStudent",
            { testId, email }
        );

    } catch (err) {
        console.error("Email check error:", err);
        res.send("Server error");
    }
});


// =================================================
// STEP 2 → REGISTER + START
// =================================================
router.post("/register-and-start", async (req, res) => {
    try {
        const { name, email, className, roll, parentContact, testId } = req.body;

        const test = await TeacherTest.findById(testId);
        if (!test) return res.send("Test not found");

        // 🔹 Check again if student already exists
        let student = await Student.findOne({
            email,
            teacherId: test.teacher
        });

        // If not exists → create new
        if (!student) {
            student = new Student({
                teacherId: test.teacher,
                name,
                email,
                class: className,
                roll,
                parentContact
            });

            await student.save();
        }

        // 🔹 Directly go to attempt check
        res.redirect(
            `/advance-student/check-attempt/${student._id}/${testId}`
        );

    } catch (err) {
        console.error("Register error:", err);
        res.send("Registration failed");
    }
});


// =================================================
// STEP 3 → CHECK ATTEMPT
// =================================================
router.get("/check-attempt/:studentId/:testId", async (req, res) => {
    try {
        const { studentId, testId } = req.params;

        const already = await TestAttempt.findOne({ studentId, testId });

        if (already) {
            return res.send(
                `<script>alert("You already attempted this test");window.close();</script>`
            );
        }

        res.redirect(`/advance-student/start/${testId}?sid=${studentId}`);

    } catch (err) {
        console.error(err);
        res.send("Error");
    }
});

// =================================================
// STEP 4 → START TEST
// =================================================
router.get("/start/:testId", async (req, res) => {
    try {
        const testId = req.params.testId;
        const studentId = req.query.sid;

        const test = await TeacherTest.findById(testId);
        if (!test) return res.send("Test not found");

        // Auto create attempt
        const existingAttempt = await TestAttempt.findOne({ studentId, testId });

        if (!existingAttempt) {
            await TestAttempt.create({
                studentId,
                testId,
                score: 0,
                startedAt: new Date()
            });
        }

        res.render("tracher_deshboard/advance-version/viewtest", {
            testTitle: test.name,
            questions: test.questions,
            duration: test.duration,
            testId: test._id,
            sid: studentId
        });

    } catch (err) {
        console.error("Start test error:", err);
        res.send("Server error");
    }
});

module.exports = router;
