// models/User.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: { type: String, required: false, unique: true },
    password: { type: String }, // пароль может быть пустым для Telegram
    telegramId: { type: String, unique: true }, // новый идентификатор
    votes: { type: Map, of: Boolean, default: {} }
});

export default mongoose.model("User", UserSchema);
