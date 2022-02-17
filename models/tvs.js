const mongoose = require("mongoose");

const tvSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  screenSize: {
    type: Number,
    required: true,
  },
  energyClass: {
    type: String,
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

const Tvs = mongoose.model("Tvs", tvSchema);

module.exports = Tvs;
