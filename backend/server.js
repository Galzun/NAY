// server.js

import express from "express";
import cors from "cors";
// import connectDB from "./db.js";
import voteRoutes from "./routes/vote.js";
import authRoutes from "./routes/auth.js";

const app = express();
const PORT = process.env.PORT || 5000;
// const allowedOrigins = [
//     "http://localhost:3000",
//     "https://galzun-nay-9d8c.twc1.net" // домен фронта из Apps
// ];

app.use(cors());
// app.use(cors({origin: allowedOrigins,}));
app.use(express.json());

// await connectDB();

app.use("/vote", voteRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Сервер запущен на порту ${PORT}`);
});