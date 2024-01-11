// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

connectDB();

dotenv.config({
  path: "./env",
});

/*
import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${procces.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error: ", error);
      throw error;
    });
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
})();
*/
