const User = require("../models/RTSUser");
const bcrypt = require("bcryptjs");
const { sendOtpEmail } = require("../utils/sendEmail");

// 1️⃣ SEND OTP
exports.sendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email)
      return res.status(400).json({ success: false, message: "Email required" });

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user)
      return res.status(404).json({ success: false, message: "Email not registered" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    user.resetOtp = otp;
    user.resetOtpExpiry = Date.now() + 10 * 60 * 1000; // 10 min
    await user.save();

    await sendOtpEmail(user.email, otp);

    res.json({ success: true, message: "OTP sent to email" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// 2️⃣ VERIFY OTP
exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  const user = await User.findOne({ email });
  if (!user || user.resetOtp !== otp)
    return res.status(400).json({ success: false, message: "Invalid OTP" });

  if (user.resetOtpExpiry < Date.now())
    return res.status(400).json({ success: false, message: "OTP expired" });

  res.json({ success: true, message: "OTP verified" });
};

// 3️⃣ RESET PASSWORD
exports.resetPassword = async (req, res) => {
  const { email, newPassword } = req.body;

  const user = await User.findOne({ email });
  if (!user)
    return res.status(404).json({ success: false, message: "User not found" });

  user.password = newPassword;
  user.resetOtp = undefined;
  user.resetOtpExpiry = undefined;

  await user.save();

  res.json({ success: true, message: "Password updated successfully" });
};
