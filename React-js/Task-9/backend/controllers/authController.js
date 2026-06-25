const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "Missing fields" });
    const exists = await User.findOne({ email });
    if (exists)
      return res.status(400).json({ message: "Email already registered" });
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = new User({ fullName, email, password: hash });
    await user.save();
    res.json({
      message: "User registered",
      user: { id: user._id, email: user.email, fullName: user.fullName },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "Missing fields" });
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET || "devsecret",
      { expiresIn: "1h" },
    );
    res.json({
      token,
      user: { id: user._id, email: user.email, fullName: user.fullName },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
