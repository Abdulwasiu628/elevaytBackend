import express from "express";
import { getChat } from "@/controllers/chatgpt.ctrl";

const router = express.Router();

router.post("/getChat", getChat);

export default router;
