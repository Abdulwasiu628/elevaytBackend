import express, { Request, Response, NextFunction } from "express";
import { getLogger } from "@/utils/loggers";
const logger = getLogger("Chat controller");
import {
  successResponse,
  errorResponse,
  errorWithData,
  successWithData,
} from "../utils/apiResponses";
import * as readline from "readline";
import chalk from "chalk";
import OpenAI from "openai";;
import dotenv from "dotenv";

dotenv.config();

console.log(String(process.env.OPENAI_SECRET), String(process.env.ORG_ID));

const openai = new OpenAI({
  apiKey: String(process.env.OPENAI_SECRET),
});

export const getChat = async (req: Request, res: Response) => {
  try {
    const { message } = req.body;
  
    const result = await openai.chat.completions.create({
      messages: [{ role: "user", content: message }],
      model: "gpt-3.5-turbo",
    });
    const reply = result.choices;
    res.status(200).json(reply);
    logger.info(reply);
      
  } catch (error) {
    res.status(404).json({error: error})
    logger.info(error);
  }
};

