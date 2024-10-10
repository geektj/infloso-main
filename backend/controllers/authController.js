const User = require("../models/user");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({ name, email, password });
    const token = generateToken(user._id);

    res.status(201).json({
      message: "User registered successfully",
      token,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in user registration", error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user._id);

    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in user login", error: error.message });
  }
};

const logout = (req, res) => {
  res.cookie('token', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: 'Logged out successfully' });
};

module.exports = {
  signup,
  login,
  logout
};
