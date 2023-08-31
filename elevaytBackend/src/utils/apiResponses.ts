import { Response } from "express";
type data = {
  [key: string]: unknown;
};
export const successResponse = (res: Response, message: string) => {
  return res.json({
    code: 200,
    success: true,
    message,
  });
};

export const successWithData = (
  res: Response,
  message: string,
  data: data | Array<string | number | unknown>
) => {
  return res.json({
    code: 200,
    success: true,
    message,
    data,
  });
};

export const errorWithData = (
  res: Response,
  message: string,
  data: data | Array<string | number | unknown>
) => {
  return res.status(400).json({
    code: 400,
    success: false,
    message,
    data,
  });
};

export const errorResponse = (res: Response, message: string) => {
  return res.status(400).json({
    code: 400,
    success: false,
    message,
  });
};

export const validationError = (res: Response, message: string) => {
  return res.json({
    code: 400,
    success: false,
    message,
  });
};

export const notFound = (res: Response, message: string) => {
  return res.status(404).json({
    code: 404,
    success: false,
    message,
  });
};
