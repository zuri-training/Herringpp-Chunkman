require("dotenv").config();
require("./config/database").connect();
const express = require("express");

// importing user context
const User = require("./model/user");

const app = express();

app.use(express.json());

// signup
app.post("/sign-up", (req, res) => {
    //register logic goes here...
});
    
// signin
app.post("/sign-in", (req, res) => {
    //login logic goes here
});

module.exports = app;