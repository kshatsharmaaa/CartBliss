import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user";
import { productRouter } from "./routes/product";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth", userRouter);
app.use("/products", productRouter);

const mongourl = process.env.MONGO_URL;
if (!mongourl) {
    throw new Error("❌ MONGO_URI is not set! Make sure it's defined in the .env file.");
  }

mongoose
.connect(mongourl)
.then(() => console.log("✅ MongoDB Connected Successfully"))
.catch((err) => console.error("❌ MongoDB Connection Error:", err));

app.listen(3001, () => console.log("Server started!"));