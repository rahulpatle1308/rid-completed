const mongoose = require("mongoose");

const attemptSchema = new mongoose.Schema({
  testId: { type: mongoose.Schema.Types.ObjectId, ref: "Test" },
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  score: Number,
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("TestAttempt", attemptSchema);
