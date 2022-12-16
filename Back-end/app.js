require("dotenv").config();
require("./config/database").connect();
const cors = require("cors");
const express = require("express");
const app = express(); 

app.use(express.json());

app.use(cors({
  origin: "*",
}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Controll-Allow-Origin",
    "Origin,X-Requsted-With,Content-Type,Accept,Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE,GET");
    return res.status(200).json({});
  }
  next();
})

// importing user context
const userRoute = require("./routes/Userroutes");
const splitCSV = require("./routes/chunkCSV");
const splitJSON = require("./routes/chunkJSON")

app.use("/api/auth", userRoute);
app.use("/split", splitCSV);
app.use("/split", splitJSON);



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
