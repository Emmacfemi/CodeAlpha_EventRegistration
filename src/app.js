require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");


const logHandler = require("./middleware/loggerMiddleware");
const errorHandler = require("./middleware/errorMiddleware");


const authRoutes = require("./routes/authRoute");
const eventRoutes = require("./routes/eventRoutes");
const registrationRoutes = require("./routes/registrationRoutes");


const app = express();

app.use(express.json());
app.use(cors());

app.use(logHandler);


// routes
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/registers", registrationRoutes);


// Global Error Middleware 
app.use(errorHandler);


module.exports = app;