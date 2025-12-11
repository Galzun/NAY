// models/User.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String },
    telegramId: { type: String, unique: true, sparse: true },
    votes: { type: Map, of: Boolean, default: {} },
});


export default mongoose.model("User", UserSchema);
