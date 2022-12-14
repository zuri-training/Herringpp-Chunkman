require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("./middleware/auth");
// importing user context
const cors = require("cors") 
const User = require("./model/user");
const app = express();
const userRoute = require("./routes/Userroutes")

app.use('/api/auth', userRoute)
app.use(cors())
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