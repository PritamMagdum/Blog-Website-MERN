import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoute.js";
import authRoutes from "./routes/authRoute.js";

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB is Connected!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(8080, () => {
  //   ("Server started at 8080");
  console.log("Server started at 8080");
});

// Middlewares
app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
