require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");


const logHandler = require("./middleware/loggerMiddleware");
const errorHandler = require("./middleware/errorMiddleware");


const app = express();

app.use(express.json());
app.use(cors());

app.use(logHandler);


// routes



// Global Error Middleware 
app.use(errorHandler);


module.exports = app;