import express, { Request, Response, NextFunction } from "express";
import { getLogger } from "@/utils/loggers";
const logger = getLogger("Users Controller");
import {
  successResponse,
  errorResponse,
  errorWithData,
  successWithData,
} from "../utils/apiResponses";


export const getUsers = async(req: Request, res: Response) => {
  logger.info("respond with a resource");
  res.send("respond with a resource");
};