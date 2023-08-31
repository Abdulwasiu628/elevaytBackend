import express, { Request, Response, NextFunction } from "express";
import { getLogger } from "@/utils/loggers";
const logger = getLogger("Chat controller");
import {
  successResponse,
  errorResponse,
  errorWithData,
  successWithData,
} from "../utils/apiResponses";


export const getHomePage = async(req: Request, res: Response) => {
  logger.info('hello Express');
  res.render('index', { title: 'Express' });
};