// server.js

import express from "express";
import cors from "cors";
import connectDB from "./db.js";
import voteRoutes from "./routes/vote.js";
import authRoutes from "./routes/auth.js";

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

await connectDB(); // Node 24 supports top-level await in ESM

app.use("/vote", voteRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Сервер запущен на порту ${PORT}`);
});