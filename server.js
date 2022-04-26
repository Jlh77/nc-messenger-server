const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("test");
});

app.get("/test", (req, res) => {
  res.send("it works");
});

module.exports = app;
