// routes/auth.js
import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import User from "../models/User.js";

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || "secretkey";
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

// Проверка подписи от Telegram
function checkTelegramAuth(data) {
    const { hash, ...rest } = data;
    const secret = crypto.createHash("sha256").update(TELEGRAM_BOT_TOKEN).digest();
    const checkString = Object.keys(rest)
        .sort()
        .map(key => `${key}=${rest[key]}`)
        .join("\n");
    const hmac = crypto.createHmac("sha256", secret).update(checkString).digest("hex");
    return hmac === hash;
}

// Авторизация через Telegram
router.post("/telegram", async (req, res) => {
    try {
        const data = req.body; // данные от Telegram Login Widget
        if (!checkTelegramAuth(data)) {
            return res.status(400).json({ message: "Неверная подпись Telegram" });
        }
        let user = await User.findOne({ telegramId: data.id });
        if (!user) {
            user = await new User({
                telegramId: data.id,
                username: data.username || `tg_${data.id}`
            }).save();
        }
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
        res.json({ token, user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Ошибка Telegram авторизации" });
    }
});

// Регистрация
router.post("/register", async (req, res) => {
    try {
        let { username, password } = req.body;
        // Нормализуем имя (убираем пробелы и приводим к нижнему регистру)
        username = username.trim().toLowerCase();
        // Проверяем существование
        const exists = await User.findOne({ username });
        if (exists) {
            return res.status(400).json({ message: "Пользователь уже существует" });
        }
        // Хэшируем пароль
        const hashedPassword = await bcrypt.hash(password, 10);
        // Сохраняем пользователя
        const user = new User({ username, password: hashedPassword });
        await user.save();
        res.json({ message: "Регистрация успешна" });
    } catch (err) {
        console.error("Ошибка регистрации:", err);
        // Ловим ошибку уникального индекса MongoDB
        if (err.code === 11000) {
            return res.status(400).json({ message: "Пользователь уже существует" });
        }
        res.status(500).json({ message: "Ошибка регистрации" });
    }
});

// Вход
router.post("/login", async (req, res) => {
    try {
        let { username, password } = req.body;
        // Нормализуем имя (убираем пробелы и приводим к нижнему регистру)
        username = username.trim().toLowerCase();
        // Ищем пользователя
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: "Пользователь не найден" });
        }
        // Проверяем пароль
        const isMatch = await bcrypt.compare(password, user.password || "");
        if (!isMatch) {
            return res.status(400).json({ message: "Неверный пароль" });
        }
        // Генерируем JWT
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
        res.json({ token, message: "Вход успешен" });
    } catch (err) {
        console.error("Ошибка входа:", err);
        res.status(500).json({ message: "Ошибка входа" });
    }
});
export default router;
