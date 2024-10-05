import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";

const app = express();
app.use(cors());

app.use(cors()); // Cho phép tất cả các nguồn gốc truy cập

// Kết nối tới MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/workshop");

export const viteNodeApp = app;