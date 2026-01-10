const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const rtsUserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true
    },

    phoneNumber: {
      type: String,
      required: true,
      unique: true,
      match: /^[0-9]{10}$/
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    password: {
      type: String,
      required: true
    },

    role: {
      type: String,
      default: "rts_user"
    },

    isVerified: {
      type: Boolean,
      default: false
    },
    // 👇 add inside schema
resetOtp: {
  type: String
},
resetOtpExpiry: {
  type: Date
}

  },
  {
    timestamps: true,
    collection: "RTSusers" // ✅ COLLECTION NAME FIXED
  },
);

// 🔐 HASH PASSWORD
rtsUserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// 🔑 COMPARE PASSWORD
rtsUserSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports =
  mongoose.models.RTSUser || mongoose.model("RTSUser", rtsUserSchema);
