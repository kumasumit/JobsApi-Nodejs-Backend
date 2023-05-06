// eslint-disable-next-line strict
"use strict";
// All imports go here
import express from "express";
import dotenv from "dotenv";
// eslint-disable-next-line no-unused-vars
import colors from "colors";
import connectDB from "./config/db.js";

// config dotenv
dotenv.config();

// Here we are connecting to the MongoDb database
connectDB();

// express app object
const app = express();

// All routes go here

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
