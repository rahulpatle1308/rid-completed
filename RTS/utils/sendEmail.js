const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD
  }
});

exports.sendOtpEmail = async (to, otp) => {
  await transporter.sendMail({
    from: `"RID Support" <${process.env.SMTP_FROM_EMAIL}>`,
    to,
    subject: "Password Reset OTP - RID",
    html: `
      <h2>Password Reset</h2>
      <p>Your OTP is:</p>
      <h1>${otp}</h1>
      <p>OTP valid for 10 minutes.</p>
    `
  });
};
