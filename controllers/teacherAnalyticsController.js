const mongoose = require("mongoose");
const Student = require("../models/Student");
const Test = require("../models/Test");


// ================================
// 🔹 TEST RANKING (MOST USED TEST)
// ================================
exports.getTestRankingList = async (req, res) => {
  try {
    // 🔥 TOKEN se teacherId lo (auth code change nahi)
    const teacherId = req.user?.userId || req.userId;

    if (!teacherId) {
      return res.status(401).json({ message: "Teacher not authenticated" });
    }

    const data = await Student.aggregate([
      {
        $match: {
          teacherId: new mongoose.Types.ObjectId(teacherId)
        }
      },

      { $unwind: "$assignedTests" },

      {
        $group: {
          _id: "$assignedTests.testId",
          studentsCount: { $sum: 1 },
          avgScore: { $avg: "$assignedTests.score" }
        }
      },

      { $sort: { studentsCount: -1 } },

      {
        $lookup: {
          from: "tests",
          localField: "_id",
          foreignField: "_id",
          as: "test"
        }
      },
      { $unwind: "$test" },

      {
        $project: {
          testId: "$_id",
          testName: "$test.title",
          studentsCount: 1,
          avgScore: { $round: ["$avgScore", 1] }
        }
      }
    ]);

    res.json(data);
  } catch (err) {
    console.error("Analytics error:", err);
    res.status(500).json({ message: "Analytics fetch failed" });
  }
};


// ========================================
// 🔹 DETAILS BUTTON – STUDENT RANKING
// ========================================
exports.getTestStudentDetails = async (req, res) => {
  try {
    const teacherId = req.user?.userId || req.userId;
    const testId = new mongoose.Types.ObjectId(req.params.testId);

    if (!teacherId) {
      return res.status(401).json({ message: "Teacher not authenticated" });
    }

    const students = await Student.aggregate([
      {
        $match: {
          teacherId: new mongoose.Types.ObjectId(teacherId)
        }
      },

      { $unwind: "$assignedTests" },

      {
        $match: {
          "assignedTests.testId": testId
        }
      },

      { $sort: { "assignedTests.score": -1 } },

      {
        $project: {
          name: 1,
          roll: 1,
          email: 1,
          parentContact: 1,
          marks: "$assignedTests.score",
          status: "$assignedTests.status"
        }
      }
    ]);

    const ranked = students.map((s, i) => ({
      rank: i + 1,
      ...s
    }));

    res.json(ranked);
  } catch (err) {
    console.error("Details error:", err);
    res.status(500).json({ message: "Details fetch failed" });
  }
};
