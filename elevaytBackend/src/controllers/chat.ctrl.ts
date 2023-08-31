import express, { Request, Response, NextFunction } from "express";
import { getLogger } from "@/utils/loggers";
const logger = getLogger("Chat controller");
import {
  successResponse,
  errorResponse,
  errorWithData,
  successWithData,
} from "../utils/apiResponses";
import { server } from "../../bin/www";
import { Server } from "socket.io";

export const getChatController = (req: Request, res: Response) => {
  const io = new Server(server, {
    path: "/chat",
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    },
  });
  console.log("here");
  io.on("connection", (socket) => {
    console.log("a user connected", socket.id);
    socket.on("join_user", (data) => {
      socket.join(data);
      console.log(data);
    });
    socket.on("disconnect", () => {
      console.log("User disconnected", socket.id);
    });
    socket.on("connect_error", (err) => {
      console.log(`connect_error due to ${err.message}`);
    });
  });
  logger.info("chat room");
};
