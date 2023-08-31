import express from "express";
import {getChatController} from "@/controllers/chat.ctrl";
const router = express.Router();

/* GET chat page. */
router.get("/", getChatController);

export default router;
