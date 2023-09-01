import { Request, Response, NextFunction } from "express";
import { getLogger } from "@/utils/loggers";
import dotenv from "dotenv";
const logger = getLogger("Stripe route");
dotenv.config();
import {
  successResponse,
  errorResponse,
  errorWithData,
  successWithData,
} from "../utils/apiResponses";


const stripeSecret = process.env.STRIPE_SECRET;
const stripeKey = process.env.STRIP_KEY;
const stripe = require("stripe")(stripeSecret);

stripe.applePayDomains.create({
  domain_name: "example.com",
});
export const postStripePayment = async (req: Request, res: Response) => {
  const { amount, currency } = req.body;

  console.log(amount, currency);
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
};
