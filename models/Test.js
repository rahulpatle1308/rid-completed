const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  teacherId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Teacher",
  required: true
}
,
  title: String,
  subject: String,
  className: String,
  duration: Number,
  totalMarks: Number,
  instructions: String,

  // ✅ ADD THESE TWO FIELDS
  startDate: { type: Date },
  endDate: { type: Date },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Test", testSchema);
