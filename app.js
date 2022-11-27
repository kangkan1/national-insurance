const express = require("express");
const app = express();

const main = require("./routes/main");

app.use("/", main);

module.exports = app;