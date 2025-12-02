// scripts/clearVotesAndUsers.js
import mongoose from "mongoose";

const MONGO_URI =
    process.env.MONGO_URI ||
    "mongodb://gen_user:qwerty12345@5.129.198.209:27017/default_db?authSource=admin";

const run = async () => {
    try {
        console.log("Подключаюсь к MongoDB...");
        await mongoose.connect(MONGO_URI);
        console.log("✅ Подключено");

        const db = mongoose.connection.db;

        // Проверяем, есть ли коллекции
        const collections = await db.listCollections().toArray();
        const names = collections.map(c => c.name);
        console.log("Найденные коллекции:", names);

        // Очищаем только users и votes, если они есть
        if (names.includes("users")) {
        const result = await db.collection("users").deleteMany({});
        console.log(`✅ Коллекция users очищена, удалено документов: ${result.deletedCount}`);
        } else {
        console.log("⚠ Коллекция users не найдена");
        }

        if (names.includes("votes")) {
        const result = await db.collection("votes").deleteMany({});
        console.log(`✅ Коллекция votes очищена, удалено документов: ${result.deletedCount}`);
        } else {
        console.log("⚠ Коллекция votes не найдена");
        }

        console.log("✅ Очистка завершена");
    } catch (err) {
        console.error("❌ Ошибка при очистке:", err);
    } finally {
        await mongoose.disconnect();
        process.exit(0);
    }
};

run();
