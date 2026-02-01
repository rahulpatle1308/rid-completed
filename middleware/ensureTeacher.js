const jwt = require("jsonwebtoken");
const Teacher = require("../models/Teacher");

module.exports = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.redirect("/login");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const teacher = await Teacher.findById(decoded.userId);

    if (!teacher) return res.redirect("/login");

    req.user = teacher;   // ✅ Teacher available everywhere
    next();
  } catch (err) {
    console.log("EnsureTeacher Error:", err.message);
    return res.redirect("/login");
  }
};
