const mongoose = require("mongoose");

const courseVisitSchema = new mongoose.Schema({
  courseId: {
    type: String,
    required: true,
    unique: true
  },
  courseName: {
    type: String,
    required: true
  },
  visitCount: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model("CourseVisit", courseVisitSchema);
