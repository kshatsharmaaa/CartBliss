import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(cors());

const mongoUsernmae = process.env.MONGO_USERNAME
const mongoPassword = process.env.MONGO_PASSWORD

mongoose.connect(`mongodb+srv://${mongoUsernmae}:${mongoPassword}@cartbliss.zhgk2.mongodb.net/CartBliss`)


app.listen(3001, () => console.log("Server started!"));