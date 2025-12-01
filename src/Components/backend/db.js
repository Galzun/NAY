// db.js
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/votesdb");
        console.log("✅ MongoDB подключена");
    } catch (err) {
        console.error("❌ Ошибка подключения:", err);
        process.exit(1);
    }
};

export default connectDB;