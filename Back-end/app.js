require("dotenv").config();
require("./config/database").connect();
const express = require("express");

// importing user context
const app = express(); 
const userRoute = require("./routes/Userroutes");

app.use("/api/auth", userRoute);

app.use(express.json({ limit: "50mb" }));

app.use("*", (req, res) => {
  res.status(404).json({
    success: "false",
    message: "Page not found",
    error: {
      statusCode: 404,
      message: "You reached a route that is not defined on this server",
    },
  });
});

module.exports = app;
