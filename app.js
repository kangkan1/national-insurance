const express = require("express");
const app = express();
app.set('view engine', 'pug')

const main = require("./routes/main");
app.use("/", main);

module.exports = app;