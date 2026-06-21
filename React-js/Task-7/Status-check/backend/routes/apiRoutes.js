import express from "express";
import mongoose from "mongoose";
import User from "../models/User.js";
import Account from "../models/Account.js";
import Student from "../models/Student.js";

const router = express.Router();

// 1. Register User
router.post("/register", async (req, res) => {
  try {
    const { name, age } = req.body;

    if (!name || !age) {
      return res.status(400).json({
        success: false,
        message: "Name and age are required",
      });
    }

    const newUser = new User({ name, age });
    await newUser.save();

    return res.status(200).json({
      success: true,
      message: "Registration Successful",
      data: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Registration Failed",
    });
  }
});

// 2. Login User
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const account = await Account.findOne({ email, password });

    if (account) {
      return res.status(200).json({
        success: true,
        message: "Login Successful",
      });
    }

    return res.status(401).json({
      success: false,
      message: "Invalid Credentials",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Login Failed",
    });
  }
});

// 3. Get User by ID
router.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        success: false,
        message: "Invalid User ID format",
      });
    }

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }

    return res.status(200).json({
      success: true,
      id: user._id,
      message: "User Found",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Error Fetching User",
    });
  }
});

// 4. Search User
router.get("/search", async (req, res) => {
  try {
    const searchName = req.query.name || "";

    const users = await User.find({
      name: { $regex: searchName, $options: "i" },
    });

    return res.status(200).json({
      success: true,
      search: searchName,
      message: "Search Completed",
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Search Failed",
    });
  }
});

// 5. Create Student
router.post("/student", async (req, res) => {
  try {
    const { name, course, city } = req.body;

    if (!name || !course || !city) {
      return res.status(400).json({
        success: false,
        message: "Name, course, and city are required",
      });
    }

    const newStudent = new Student({ name, course, city });
    await newStudent.save();

    return res.status(201).json({
      success: true,
      message: "Student created successfully",
      data: newStudent,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to create student",
    });
  }
});

export default router;
