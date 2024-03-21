import express from "express";
import { createComment } from "../controller/commentController.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createComment);

export default router;
