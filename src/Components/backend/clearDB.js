// clearDB.js
import mongoose from "mongoose";
import User from "./models/User.js";
import Vote from "./models/Vote.js";

const MONGO_URI = "mongodb://localhost:27017/votesdb";

const clearDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("✅ Подключено к MongoDB");

        // Очистка коллекций
        await User.deleteMany({});
        console.log("🗑️ Пользователи удалены");

        await Vote.deleteMany({});
        console.log("🗑️ Голоса удалены");

        console.log("🎉 База данных очищена полностью");
    } catch (err) {
        console.error("❌ Ошибка при очистке:", err);
    } finally {
        await mongoose.disconnect();
        console.log("🔌 Соединение закрыто");
    }
};

clearDB();
