// models/User.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    votes: { type: Map, of: Boolean, default: {} } // по категориям
});

export default mongoose.model("User", UserSchema);
