// rebuildIndexes.js
import mongoose from "mongoose";
import User from "./models/User.js"; // в схеме у тебя скорее всего есть unique: true на username

const MONGO_URI =
    "mongodb://gen_user:qwerty12345@5.129.198.209:27017/default_db?authSource=admin";

const run = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("✅ Подключено к MongoDB");

        // Сначала удалим все индексы коллекции users (кроме _id)
        await User.collection.dropIndexes();
        console.log("🗑 Индексы users удалены");

        // Затем пересоздадим индексы из схемы Mongoose
        await User.syncIndexes();
        console.log("✅ Индексы users пересозданы по схеме");
    } catch (err) {
        console.error("❌ Ошибка при пересоздании индексов:", err);
    } finally {
        await mongoose.disconnect();
        process.exit(0);
    }
};

run();
