const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/ToDoRoute");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
const path = require("path");

app.use(express.json());
app.use(cors());

mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log("Connected to MongoDB..."))
	.catch((err) => console.log(err));

app.use(routes);

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});