import { Router } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || "secretkey";

const auth = (req, res, next) => {
    const header = req.headers.authorization;
    if (!header) return res.status(401).json({ message: "Нет токена" });
    const token = header.split(" ")[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch {
        return res.status(401).json({ message: "Неверный токен" });
    }
};

// Добавление ачивки
router.post("/achievement", auth, async (req, res) => {
    try {
        const { achievement } = req.body;
        const user = await User.findById(req.userId);
        if (!user) return res.status(404).json({ message: "Пользователь не найден" });

        user.achievements.set(achievement, true);
        await user.save();

        res.json({ message: "Ачивка сохранена", achievements: user.achievements });
    } catch (err) {
        console.error("Ошибка сохранения ачивки:", err);
        res.status(500).json({ message: "Ошибка сервера" });
    }
});

// Получение ачивок при входе
router.get("/achievements", auth, async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        if (!user) return res.status(404).json({ message: "Пользователь не найден" });
        res.json({ achievements: user.achievements });
    } catch (err) {
        res.status(500).json({ message: "Ошибка сервера" });
    }
    });

export default router;
