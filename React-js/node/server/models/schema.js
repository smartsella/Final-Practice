import mongoose from "mongoose";

const personalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    place: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Personal = mongoose.model("Personal", personalSchema);

export default Personal;
