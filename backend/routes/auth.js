// routes/auth.js
import { Router } from "express";
// import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import User from "../models/User.js";

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || "secretkey";

// ВРЕМЕННАЯ заглушка регистрации БЕЗ Mongo
router.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
        return res.status(400).json({ message: "Логин и пароль обязательны" });
        }

        console.log("REGISTER STUB:", { username });

        // Никаких User.findOne / save — просто успешный ответ
        return res.json({ message: "Регистрация (заглушка)", username });
    } catch (err) {
        console.error("REGISTER ERROR:", err);
        return res.status(500).json({ message: "Ошибка регистрации (заглушка)" });
    }
});

// Регистрация
// router.post("/register", async (req, res) => {
//     try {
//         const { username, password } = req.body;
//         const exists = await User.findOne({ username });
//         if (exists) return res.status(400).json({ message: "Пользователь уже существует" });

//         const hashedPassword = await bcrypt.hash(password, 10);
//         await new User({ username, password: hashedPassword }).save();

//         res.json({ message: "Регистрация успешна" });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: "Ошибка регистрации" });
//     }
// });

// Вход
router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ message: "Пользователь не найден" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Неверный пароль" });

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
        res.json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Ошибка входа" });
    }
});

export default router;
