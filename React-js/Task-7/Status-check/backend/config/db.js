import mongoose from "mongoose";
import Account from "../models/Account.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);

    // Seed default admin login credential if it doesn't exist
    const defaultEmail = "admin@gmail.com";
    const defaultPassword = "12345";
    const existingAdmin = await Account.findOne({ email: defaultEmail });
    if (!existingAdmin) {
      await Account.create({
        email: defaultEmail,
        password: defaultPassword,
      });
      console.log(`Seeded default admin credential: ${defaultEmail}`);
    }
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
