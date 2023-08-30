// import express from "express";
// import { getLogger } from "@/utils/loggers";
// const router = express.Router();
// const logger = getLogger("INDEX_ROUTE");
// import { server } from "../../bin/www";
// import { Server } from "socket.io";
// /* GET chat page. */
// router.get("/", function (_req, res, _next) {
//     const io = new Server(server, {
//       path: "/chat",
//       cors: {
//         origin: "http://localhost:3000",
//         methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
//       },
//     });
//     console.log("here");
//     io.on("connection", (socket) => {
//       console.log("a user connected", socket.id);
//       socket.on("join_user", (data) => {
//         socket.join(data)
//         console.log(data)
        
//       })
//       socket.on("disconnect", () => {
//         console.log("User disconnected", socket.id);
//       });
//       socket.on("connect_error", (err) => {
//         console.log(`connect_error due to ${err.message}`);
//       });
//     });
//   logger.info("chat room");
  
// });

// export default router;
