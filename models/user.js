const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username cannot be black"],
  },
  password: {
    type: String,
    required: [true, "Password cannot be empty"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
