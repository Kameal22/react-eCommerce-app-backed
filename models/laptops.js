const mongoose = require("mongoose");

const laptopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  processor: {
    type: String,
    required: true,
  },
  graphics: {
    type: String,
    required: true,
  },
  screen: {
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

const Laptops = mongoose.model("Laptops", laptopSchema);

module.exports = Laptops;
