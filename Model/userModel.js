const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: [true, "Email is requried"],
    },
    password: {
      type: String,
      trim: true,
      required: true,
      minlength: [4, "Minimum password length 4"],
      required: [true, "Password is required"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
