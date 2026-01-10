const User = require("../models/RTSUser");

// 🔹 GET PROFILE
exports.getProfile = async (req, res) => {
  try {
    const { userId } = req.params;

    console.log("📥 GET Profile Request - User ID:", userId);

    const user = await User.findById(userId).select("-password");
    if (!user) {
      console.log("❌ User not found for ID:", userId);
      return res.status(404).json({ 
        success: false, 
        message: "User not found" 
      });
    }

    console.log("✅ User found:", user.fullName, user.email);

    res.json({
      success: true,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        title: user.title || "Student",
        createdAt: user.createdAt
      }
    });

  } catch (err) {
    console.error("❌ Get Profile Error:", err);
    res.status(500).json({ 
      success: false, 
      message: "Server error" 
    });
  }
};

// 🔹 UPDATE PROFILE
exports.updateProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const { fullName, email, phoneNumber, title } = req.body;

    console.log("✏️ UPDATE PROFILE REQUEST:");
    console.log("User ID:", userId);
    console.log("Request Body:", { fullName, email, phoneNumber, title });

    // Validate required fields
    if (!fullName || !email) {
      console.log("❌ Validation failed: Missing required fields");
      return res.status(400).json({
        success: false,
        message: "Full name and email are required"
      });
    }

    // Check if user exists
    const userExists = await User.findById(userId);
    console.log("📊 User exists check:", userExists ? "Yes" : "No");
    
    if (!userExists) {
      return res.status(404).json({ 
        success: false, 
        message: "User not found" 
      });
    }

    // Check if email already exists for another user
    if (email && email !== userExists.email) {
      console.log("🔍 Checking email uniqueness...");
      const emailExists = await User.findOne({ 
        email: email.toLowerCase(),
        _id: { $ne: userId }
      });
      if (emailExists) {
        console.log("❌ Email already exists for another user");
        return res.status(409).json({
          success: false,
          message: "Email already registered"
        });
      }
    }

    // Check if phone already exists for another user
    if (phoneNumber && phoneNumber !== userExists.phoneNumber) {
      console.log("🔍 Checking phone uniqueness...");
      const phoneExists = await User.findOne({ 
        phoneNumber,
        _id: { $ne: userId }
      });
      if (phoneExists) {
        console.log("❌ Phone already exists for another user");
        return res.status(409).json({
          success: false,
          message: "Phone number already registered"
        });
      }
    }

    // Prepare update object
    const updateData = { 
      fullName, 
      email: email.toLowerCase(),
      title: title || "Student",
      updatedAt: Date.now()
    };

    // Only update phoneNumber if provided
    if (phoneNumber && phoneNumber.trim() !== '') {
      updateData.phoneNumber = phoneNumber;
    }

    console.log("🔄 Update Data:", updateData);

    // Update user
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      updateData,
      { 
        new: true,  // Return updated document
        runValidators: true  // Run model validations
      }
    ).select("-password");

    console.log("✅ User updated successfully:", updatedUser.email);

    res.json({
      success: true,
      message: "Profile updated successfully",
      user: updatedUser
    });

  } catch (err) {
    console.error("❌ Update Profile ERROR:", err);
    console.error("Error Details:", {
      name: err.name,
      message: err.message,
      code: err.code,
      errors: err.errors
    });
    
    if (err.code === 11000) {
      // Duplicate key error
      return res.status(409).json({
        success: false,
        message: "Email or phone number already exists"
      });
    }

    if (err.name === 'ValidationError') {
      // Mongoose validation error
      const messages = Object.values(err.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    }

    res.status(500).json({ 
      success: false, 
      message: "Update failed: " + err.message 
    });
  }
};