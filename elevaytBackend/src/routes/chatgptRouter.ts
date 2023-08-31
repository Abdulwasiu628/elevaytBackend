import express from "express";
import { getChat } from "@/controllers/chatgpt.ctrl";

const router = express.Router();

router.get("/getChat", getChat);

export default router;
