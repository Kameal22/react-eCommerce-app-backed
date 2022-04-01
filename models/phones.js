const mongoose = require("mongoose");

const phoneSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  screen: {
    type: Number,
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
  scdImg: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    lowercase: true,
  },
});

const Phones = mongoose.model("Phones", phoneSchema);

module.exports = Phones;
