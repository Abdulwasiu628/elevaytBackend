/* eslint-disable no-unused-vars */
import { Request, Response } from "express";
import { getLogger } from "../utils/loggers";
import axios from "axios";
import { config } from "dotenv";
import { companyData } from "../extras/data";
config();
import {
  successResponse,
  successWithData,
  errorWithData,
  errorResponse,
} from "../utils/apiResponses";
import yahooFinance from "yahoo-finance2";


//const yahoo = new yahooStockAPI();

const logger = getLogger("Financial Stock Controller: ");

export const postStockSummary = async (req: Request, res: Response) => {
  try {
    const {symbol, type, date} = req.body 
    //const types = [quote, summary, chart, historical]
    switch (type) {
      case "quoteSummary": {
        const quoteSummary = await yahooFinance.quoteSummary(symbol);
        const message = "Data gotten successfully";
        successWithData(res, message, quoteSummary);
        break;
      }
      case "quote": {
        const quote = await yahooFinance.quote(symbol);
        const message = "Data gotten successfully";
        successWithData(res, message, quote);
        break;
      }
      case "trendingSymbols": {
        const queryOption = {};
        const trendingSymbols = await yahooFinance.trendingSymbols(symbol);
        const message = "Data gotten successfully";
        successWithData(res, message, trendingSymbols);
        break;
      }
      case "search": {
        const search = await yahooFinance.search(symbol);
        const message = "Data gotten successfully";
        successWithData(res, message, search);
        break;
      }
      case "insights": {
        const insights = await yahooFinance.insights(symbol);
        const message = "Data gotten successfully";
        successWithData(res, message, insights);
        break;
      }
      case "dailyGainers": {
        const dailyGainers: any = await yahooFinance.dailyGainers();
        const message = "Data gotten successfully";
        successWithData(res, message, dailyGainers);
        break;
      }
      default:
        break;
    }
    
  } catch (error: any) {
    logger.info(error);
    const message = "Service is unavailable, try again!";
    errorWithData(res, message, error);
  }
};
