// routes/vote.js
import { Router } from "express";
import jwt from "jsonwebtoken";
import Vote from "../models/Vote.js";
import User from "../models/User.js";

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || "secretkey";

// Middleware аутентификации
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

// Голос: один раз в каждой категории
router.post("/", auth, async (req, res) => {
    try {
        const { category, streamer } = req.body;
        if (!category || !streamer) {
        return res.status(400).json({ message: "Нужно указать category и streamer" });
        }

        const user = await User.findById(req.userId);
        if (!user) return res.status(404).json({ message: "Пользователь не найден" });

        if (user.votes.get(category)) {
        return res.status(400).json({ message: `Вы уже голосовали в номинации ${category}` });
        }

        await new Vote({ category, streamer_name: streamer, userId: user._id }).save();
        user.votes.set(category, true);
        await user.save();

        res.json({ message: `Голос учтён в номинации ${category}`, streamer });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Ошибка сервера" });
    }
});

// Статистика голосов + список пользователей
router.get("/stats", async (req, res) => {
    try {
        const stats = await Vote.aggregate([
            {
                $lookup: {
                    from: "users", // имя коллекции User в MongoDB
                    localField: "userId",
                    foreignField: "_id",
                    as: "user"
                }
            },
            { $unwind: "$user" },
            {
                $group: {
                    _id: { category: "$category", streamer: "$streamer_name" },
                    total: { $sum: 1 },
                    users: { $push: "$user.username" } // собираем никнеймы
                }
            },
            {
                $group: {
                    _id: "$_id.category",
                    votes: {
                        $push: {
                            streamer: "$_id.streamer",
                            total: "$total",
                            users: "$users"
                        }
                    }
                }
            },
            { $project: { category: "$_id", votes: 1, _id: 0 } }
        ]);

        const users = await User.find({}, { password: 0 });

        let output = "=== 📊 Статистика голосов ===\n";
        stats.forEach(cat => {
            output += `\nКатегория: ${cat.category || "Без категории"}\n`;
            cat.votes.forEach(v => {
                output += `${v.streamer} - ${v.total} (голосовали: ${v.users.join(", ")})\n`;
            });
        });

        output += "\n=== 👥 Зарегистрированные пользователи ===\n";
        users.forEach(u => {
            output += `- ${u.username}\n`;
        });

        console.log(output);
        res.type("text/plain").send(output);
    } catch (err) {
        console.error("Ошибка при получении статистики:", err);
        res.status(500).json({ message: "Ошибка сервера" });
    }
});


export default router;
