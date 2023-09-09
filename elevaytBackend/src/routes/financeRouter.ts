import { Router } from "express";
import { postStockSummary } from "../controllers/finance.ctrl";

const router = Router();

router.post("/finance/getStock", postStockSummary);

export default router;
