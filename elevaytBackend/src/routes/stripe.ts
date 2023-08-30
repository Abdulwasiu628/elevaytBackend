import express from "express";
import { getLogger } from "@/utils/loggers";
import dotenv from "dotenv";
const router = express.Router();
const logger = getLogger("Stripe route");

dotenv.config();

const stripeSecret = process.env.STRIPE_SECRET;
const stripeKey = process.env.STRIP_KEY;

/* GET home page. */
const stripe = require("stripe")(stripeSecret);

router.post("/create-payment-intent", async (req, res) => {
  const { amount, currency } = req.body;
  
  console.log(amount, currency)
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error creating payment intent" });
  }
});



export default router;
