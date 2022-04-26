const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1");
});

app.get("/test", (req, res) => {
  res.send("<h1>test</h1");
});

module.exports = app;
