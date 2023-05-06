// eslint-disable-next-line strict
"use strict";
// All imports go here
// Package imports
import express from "express";
import dotenv from "dotenv";
// eslint-disable-next-line no-unused-vars
import colors from "colors";
import cors from "cors";
import morgan from "morgan";
// File imports
import connectDB from "./config/db.js";

// config dotenv
dotenv.config();

// Here we are connecting to the MongoDb database
connectDB();

// express app object
const app = express();
// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// All routes go here

// Error handling middleware goes here after the routes
// GET PORT
const PORT = process.env.PORT || 8080;
// listening to server
app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.DEV_MODE} Mode on port ${PORT}`.bgCyan
      .white
    // Here bgCyan is background color and white is text color
  );
});
