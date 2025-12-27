import express from "express";
import {
  authController,
  authgeted,
  authUpdate,
  authDelete,
} from "../controllers/authController.js";

const Router = express.Router();

Router.post("/posted", authController);
Router.get("/geted", authgeted);
Router.put("/update/:id", authUpdate);
Router.delete("/delete/:id", authDelete);

export default Router;
