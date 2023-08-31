import { postStripePayment } from "@/controllers/stripe.ctrl";
import express from "express";
const router = express.Router();



router.post("/create-payment-intent", postStripePayment);



export default router;
