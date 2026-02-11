const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  text: String,
  type: String,
  points: Number,
  difficulty: String,
  options: [
    {
      text: String,
      isCorrect: Boolean
    }
  ]
});

const teacherTestSchema = new mongoose.Schema({
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher"
  },
  name: String,
  subject: String,
  duration: Number,
  difficulty: String,
  description: String,
  questions: [questionSchema],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("TeacherTest", teacherTestSchema);
