const mongoose = require("mongoose");

const procesorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  cores: {
    type: Number,
    required: true,
  },
  cache: {
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

const Processors = mongoose.model("Processors", procesorSchema);

module.exports = Processors;
