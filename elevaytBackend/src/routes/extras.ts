import express from "express";
import { getLogger } from "@/utils/loggers";
const router = express.Router();
const logger = getLogger("extras");
import path from "path";
import { readFileSync } from "fs";
import { json } from "stream/consumers";

/* GET home page. */
router.get("/", function (_req, res, _next) {
  logger.info("hello Express");
  const file = readFileSync(
    path.join(__dirname, "../extras/currencies.csv"),
    "utf-8"
  );
  const newFile = file.split("\n").map( element => {
    if(element.includes(",")){
      return element.replace(",", ":")
    }
  }).filter(val => {
    return val !== null
  })
  interface obj {
    [_key: string]: string
  }
  const _object: obj = {}
  for(let element of newFile){
    if(element){
      const [_key, _value] = element.split(":");
      _object[_key] = _value
    }
  }
  logger.info(_object)
  res.status(201).json({..._object});
});

export default router;
