import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/user", userRouter);

const mongoUsernmae = process.env.MONGO_USERNAME
const mongoPassword = process.env.MONGO_PASSWORD

mongoose.connect(`mongodb+srv://${mongoUsernmae}:${mongoPassword}@cartbliss.zhgk2.mongodb.net/CartBliss`)


app.listen(3001, () => console.log("Server started!"));