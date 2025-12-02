// clearDB.js
import mongoose from "mongoose";
import User from "./models/User.js";
import Vote from "./models/Vote.js";

const MONGO_URI =
    "mongodb://gen_user:qwerty12345@5.129.198.209:27017/default_db?authSource=admin";

const clearDB = async () => {
    try {
        console.log("Подключаюсь к MongoDB:", MONGO_URI);
        await mongoose.connect(MONGO_URI);
        console.log("✅ Подключено к MongoDB");

        const usersRes = await User.deleteMany({});
        console.log(`🧹 Пользователи удалены, документов: ${usersRes.deletedCount}`);

        const votesRes = await Vote.deleteMany({});
        console.log(`🧹 Голоса удалены, документов: ${votesRes.deletedCount}`);

        console.log("✅ База данных очищена полностью");
    } catch (err) {
        console.error("❌ Ошибка при очистке:", err);
    } finally {
        await mongoose.disconnect();
        console.log("🔌 Соединение закрыто");
        process.exit(0);
    }
};

clearDB();
