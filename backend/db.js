// db.js
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;

        if (!uri) {
        throw new Error("MONGO_URI не задана в переменных окружения");
        }

        await mongoose.connect(uri);
        console.log("✅ MongoDB подключена");
    } catch (err) {
        console.error("❌ Ошибка подключения:", err);
        process.exit(1);
    }
};

export default connectDB;
