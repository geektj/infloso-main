

const test = (req,res) => {
    res.json('test is working')
}

module.exports = {
    test
}

// const User = require('../models/user');
// const jwt = require('jsonwebtoken');

// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: process.env.JWT_EXPIRE,
//   });
// };

// exports.signup = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;

//     const userExists = await User.findOne({ $or: [{ email }, { username }] });
//     if (userExists) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     const user = await User.create({ username, email, password });
//     const token = generateToken(user._id);

//     res.status(201).json({
//       message: 'User registered successfully',
//       token,
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Error in user registration', error: error.message });
//   }
// };

// exports.login = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     const user = await User.findOne({ username }).select('+password');
//     if (!user || !(await user.matchPassword(password))) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     const token = generateToken(user._id);

//     res.status(200).json({
//       message: 'Login successful',
//       token,
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Error in user login', error: error.message });
//   }
// };