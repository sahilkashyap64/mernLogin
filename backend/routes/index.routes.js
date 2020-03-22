//express
const express = require("express");
const app = express();

app.use("/server/register", require("./register.routes"));
app.use("/server/login", require("./login.routes"));

module.exports = app