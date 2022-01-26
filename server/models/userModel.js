const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    privateAccount: { type: Boolean, require: false, default: false },

    followers: [{ type: mongoose.Schema.Types.ObjectId, req: "users" }],
    following: [{ type: mongoose.Schema.Types.ObjectId, req: "users" }],
    profilePicUrl: { type: String, require: false, default: "" },
    bio: { type: String, require: false, default: "" },
    savedPosts: [],
    archivedPosts: [],
  },
  { timestamps: true }
);
module.exports = mongoose.model("users", userSchema);
