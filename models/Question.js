const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  testId: { type: mongoose.Schema.Types.ObjectId, ref: "Test" },
  type: String,
  text: String,
  options: { type: [String], default: [] }, 
  correctAnswer: { type: Number, default: 0 },
  points: { type: Number, default: 1 }
});

module.exports = mongoose.model("Question", questionSchema);
