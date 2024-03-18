import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB is Connected!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(8080, (req, res) => {
  //   ("Server started at 8080");
  console.log("Server started at 8080");
});
