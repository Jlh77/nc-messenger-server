const app = require("./server");
const { PORT = 8080 } = process.env;

const server = app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Running chat server at ${PORT}...`);
});

// const io = require("socket.io")(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"],
//   },
// });

// const defaultUser = {
//   id: "anon",
//   name: "Anonymous",
// };
// const messages = new Set();

// // const apiRouter = require("./routers/api.router");
// // app.use("/api", apiRouter);

// // Messaging
// io.on("connection", (socket) => {
//   console.log("User has entered the chat");
//   socket.on("disconnect", () => {
//     console.log("User has left the chat");
//   });

//   socket.on("getMessages", () => {
//     messages.forEach((message) => {
//       socket.emit("message", message);
//     });
//   });

//   socket.on("message", (value) => {
//     console.log("someone sent a message!");

//     const message = {
//       id: 20,
//       user: defaultUser,
//       value,
//       time: Date.now(),
//     };

//     messages.add(message);

//     socket.emit("message", message);
//   });
// });
