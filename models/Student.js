const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
    required: true
  },
  assignedTests: [{
   testId: { type: mongoose.Schema.Types.ObjectId, ref: "Test" },
   status: { type: String, default: "pending" }, // pending / completed
   score: { type: Number, default: 0 }
}]

,
  name: String,
 email: {
  type: String,
  required: true
}

,
  class: String,
  roll: String,
  parentContact: String
});


module.exports = mongoose.model("Student", studentSchema);
