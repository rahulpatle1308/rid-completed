const User = require("../models/RTSUser");

// SignupControllers.js मध्ये बदल करा
exports.signupUser = async (req, res) => {
 
  try {
    const { fullName, phoneNumber, email, password } = req.body;
    // Validation सुधारा
    if (!fullName || !phoneNumber || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    // Phone number validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      return res.status(400).json({
        success: false,
        message: "Phone number must be 10 digits"
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format"
      });
    }


    const userExists = await User.findOne({
      $or: [{ email: email.toLowerCase() }, { phoneNumber }]
    });

    if (userExists) {
      return res.status(409).json({
        success: false,
        message: "Email or phone already registered"
      });
    }

    // Create user with lowercase email
    const newUser = await User.create({
      fullName,
      phoneNumber,
      email: email.toLowerCase(),
      password
    });

    return res.status(201).json({
      success: true,
      message: "Signup successful",
      redirectUrl: "/rts/Authentication/login.html",
      userId: newUser._id
    });

  } catch (err) {
    console.error("SIGNUP ERROR 👉", err);

    if (err.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Email or phone already exists"
      });
    }

    // Validation errors
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    }

    return res.status(500).json({
      success: false,
      message: "Internal server error. Please try again."
    });
  }
};
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password required"
      });
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid password"
      });
    }

    // ✅ सभी user data भेजें
    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: user._id.toString(), // ⭐ .toString() add करें
        fullName: user.fullName,
        email: user.email,
        phoneNumber: user.phoneNumber || "",
        title: user.title || "Student",
        createdAt: user.createdAt
      }
    });

  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};