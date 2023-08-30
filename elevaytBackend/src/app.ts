import createError from 'http-errors';
import express, { RequestHandler, ErrorRequestHandler  } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { server } from '../bin/www';
import { Server } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";


import indexRouter from './routes/index';
import usersRouter from './routes/users';
//import chatRouter from "@/routes/chat"
import stripeRouter from "@/routes/stripe"
import extraRouter from "@/routes/extras"

dotenv.config()
const app = express();
const corsOptions = cors({
  origin: process.env.LOCALHOST,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(corsOptions);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/extra", extraRouter)
app.use("/pay", stripeRouter )



// catch 404 and forward to error handler
const requestHandler: RequestHandler = function (_req, _res, next) {
  next(createError(404));
}
app.use(requestHandler);

// error handler
const errorRequestHandler: ErrorRequestHandler = function (
  err,
  req,
  res,
  _next
) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
};
app.use(errorRequestHandler);
  


export default app;
