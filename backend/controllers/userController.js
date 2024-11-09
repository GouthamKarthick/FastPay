const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

exports.registerUser = async (req, res) => {
  const { name, email, password, balance } = req.body;

  try {
    const userExists = await User.findOne({ email:email });
    if (userExists)
      return res.status(400).json({ message: 'User already exists' });

    const user = await User.create({ name:name, email:email, password:password, balance:balance });
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email:email });
    if (!user) {
      res.status(400).json({ message: "User doesn't exist" });
      return;
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ message: "User name or password doesn't match" });
      return 
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({token, id:user._id});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
