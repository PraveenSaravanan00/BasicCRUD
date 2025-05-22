import express from "express";
import basicRouter from "./routes/basicroute.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/v1", basicRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB conncted"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(8000, () => {
  console.log("server is listening 8000");
});
