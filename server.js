// eslint-disable-next-line strict
"use strict";
// All imports go here
import express from "express";
import dotenv from "dotenv";
import colors from "colors";

// config dotenv
dotenv.config();

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
