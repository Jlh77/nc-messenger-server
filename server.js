const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

//const server = require("./server.listen");
const { port = 9090 } = process.env;
console.log(port);

const server = app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Running chat server at ${port}...`);
});
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(express.json());

const defaultUser = {
  id: "anon",
  name: "Anonymous",
};
const messages = new Set();

// const apiRouter = require("./routers/api.router");
// app.use("/api", apiRouter);

// Messaging
io.on("connection", (socket) => {
  console.log("User has entered the chat");
  socket.on("disconnect", () => {
    console.log("User has left the chat");
  });

  socket.on("getMessages", () => {
    messages.forEach((message) => {
      socket.emit("message", message);
    });
  });

  socket.on("message", (value) => {
    console.log("someone sent a message!");

    const message = {
      id: 20,
      user: defaultUser,
      value,
      time: Date.now(),
    };

    messages.add(message);

    socket.emit("message", message);
  });
});

app.get("/", (req, res) => {
  res.send("test");
});

app.get("/test", (req, res) => {
  res.send("it works");
});

module.exports = app;
