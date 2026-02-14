const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
    testId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Test",
        required: true
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
    },
    name: String,
    roll: String,
    email: String,
    parentContact: String,
    marks: Number,
    status: {
        type: String,
        default: "Completed"
    }
}, { timestamps: true });

module.exports = mongoose.model("Result", resultSchema);
