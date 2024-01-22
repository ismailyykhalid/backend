require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/test", function (req, res) {
  res.send("<h1>Test page for backend </h1> ");
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
