// models/Vote.js
import mongoose from "mongoose";

const VoteSchema = new mongoose.Schema({
    category: { type: String, required: true },
    streamer_name: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    timestamp: { type: Date, default: Date.now }
});

export default mongoose.model("Vote", VoteSchema);
