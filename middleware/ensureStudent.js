const jwt = require("jsonwebtoken");
const Student = require("../models/Student");

module.exports = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.redirect("/login");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const student = await Student.findById(decoded.userId);

    if (!student) return res.redirect("/login");

    req.user = student;   // ✅ Student available everywhere
    next();
  } catch (err) {
    console.log("EnsureStudent Error:", err.message);
    return res.redirect("/login");
  }
};
