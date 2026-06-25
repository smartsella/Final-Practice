require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/task9";

async function startServer() {
  try {
    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("Connected to MongoDB");

    app.use("/api/auth", authRoutes);
    app.get("/", (req, res) => res.send("Task-9 backend running"));

    const port = process.env.PORT || 4000;
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error("MongoDB connection error", err.message || err);
    console.error(
      "Make sure MongoDB is running or set MONGODB_URI in backend/.env",
    );
    process.exit(1);
  }
}

startServer();
