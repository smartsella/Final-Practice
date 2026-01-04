import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js";
import { connectDB } from "./config/db.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use(cors());
const PORT = process.env.PORT;
app.use("/api/auth", authRoute);
connectDB();

app.listen(PORT, () => {
  console.log(`server running for http://localhost:${PORT}`);
});

// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import authRoute from "./routes/authRoute.js";
// import { connectDB } from "./config/db.js";

// dotenv.config();
// const app = express();
// app.use(cors());

// app.use(express.json());
// app.use("/api/auth", authRoute);
// const PORT = process.env.PORT;
// connectDB();

// app.listen(PORT, () => {
//   console.log(`server running http://localhost:${PORT}`);
// });
