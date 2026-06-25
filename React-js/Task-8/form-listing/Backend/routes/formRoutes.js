import express from "express";
import {
  createForm,
  getAllForms,
  getFormById,
  updateForm,
  deleteForm,
} from "../controllers/formController.js";

const router = express.Router();

// Routes
router.post("/", createForm); // Create
router.get("/", getAllForms); // Read all
router.get("/:id", getFormById); // Read one
router.put("/:id", updateForm); // Update
router.delete("/:id", deleteForm); // Delete

export default router;
