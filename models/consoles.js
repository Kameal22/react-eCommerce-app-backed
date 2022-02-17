const mongoose = require("mongoose");

const consoleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  memory: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  img: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    lowercase: true,
  },
});

const Consoles = mongoose.model("Consoles", consoleSchema);

module.exports = Consoles;
