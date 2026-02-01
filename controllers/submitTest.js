const Student = require("../models/Student");
const Test = require("../models/Test");

exports.submitTest = async (req, res) => {
  try {
    const { studentId, testId, score } = req.body;

    // 1️⃣ student update
    await Student.updateOne(
      { _id: studentId, "assignedTests.testId": testId },
      {
        $set: {
          "assignedTests.$.score": score,
          "assignedTests.$.status": "completed"
        }
      }
    );

    // 2️⃣ test submissions increase
    await Test.findByIdAndUpdate(testId, {
      $inc: { submissions: 1 }
    });

    res.send("submitted");
  } catch (err) {
    console.error("Submit Error:", err);
    res.status(500).send("submit failed");
  }
};
