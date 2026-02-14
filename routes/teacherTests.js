const express = require("express");
const router = express.Router();
const TeacherTest = require("../models/teacherTestModel");

//teacher view directly
router.get("/view/:id", async (req, res) => {
    try {
        const testId = req.params.id;

        const test = await TeacherTest.findById(testId);

        if (!test) {
            return res.send("Test not found");
        }

        res.render("tracher_deshboard/advance-version/viewtest.ejs", {
            testId: test._id,
            testTitle: test.name,       // title from model
            questions: test.questions,  // questions from model
            duration: test.duration,    // duration from model
            sid: ""
        });

    } catch (err) {
        console.error("View test error:", err);
        res.send("Server error");
    }
});
//link through not open direct 
router.get("/open/:id", async (req, res) => {
    try {
        const testId = req.params.id;

        const test = await TeacherTest.findById(testId);

        if (!test) {
            return res.send("Test not found");
        }

        // 🔹 Student verify page
        res.render("tracher_deshboard/advance-version/sendtestprocess/opentestverify.ejs", {
            testId: test._id,
            testTitle: test.name,
            questions: test.questions,
            duration: test.duration,
            sid: ""
        });

    } catch (err) {
        console.error("Open test error:", err);
        res.send("Server error");
    }
});

// Delete test
router.delete("/delete/:id", async (req, res) => {
    try {
        const testId = req.params.id;

        await TeacherTest.findByIdAndDelete(testId);

        res.json({ success: true });
    } catch (err) {
        console.error("Delete test error:", err);
        res.json({ success: false });
    }
});
// Update test
router.put("/update/:id", async (req, res) => {
    try {
        const testId = req.params.id;
        const updateData = req.body;

        await TeacherTest.findByIdAndUpdate(testId, updateData);

        res.json({ success: true });
    } catch (err) {
        console.error("Update test error:", err);
        res.json({ success: false });
    }
});
router.get("/api/:id", async (req, res) => {
    try {
        const test = await TeacherTest.findById(req.params.id);
        res.json(test);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

router.get("/analytics", (req, res) => {
    const testId = req.query.testId;

    res.render("tracher_deshboard/advance-version/sendtestprocess/analytics", {
        testId
    });
});




module.exports = router;
