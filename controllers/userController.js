const bcrypt = require("bcryptjs");

const User = require("../models/user");
const Teacher = require("../models/Teacher");
const Organisation = require("../models/Organisation");

exports.registerUser = async (req, res) => {
  try {
    let {
      name,
      email,
      password,
      phone,
      role,
      organisationType
    } = req.body;

    // ✅ email normalize
    email = email.toLowerCase().trim();

    let Model;

    if (role === "student") Model = User;
    else if (role === "teacher") Model = Teacher;
    else if (role === "organisation") Model = Organisation;
    else return res.status(400).json({ success: false, message: "Invalid role" });

    const existingUser = await Model.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const data = {
      name,
      email,
      password: hashedPassword,
      phone,
      role,
    };

    if (role === "organisation") {
      data.organisationType = organisationType;
    }

    await Model.create(data);

    return res.json({ success: true, message: "Registration successful" });

  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
