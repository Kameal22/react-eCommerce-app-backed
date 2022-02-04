const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/eCommerceDatabase");

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
  category: {
    type: String,
    lowercase: true,
    enum: [
      "computers",
      "smartphones",
      "gaming",
      "processors",
      "tvs",
      "headphones",
    ],
  },
});

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
  category: {
    type: String,
    lowercase: true,
    enum: [
      "computers",
      "smartphones",
      "gaming",
      "processors",
      "tvs",
      "headphones",
    ],
  },
});

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
    enum: [
      "computers",
      "smartphones",
      "gaming",
      "processors",
      "tvs",
      "headphones",
    ],
  },
});

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
  category: {
    type: String,
    lowercase: true,
    enum: [
      "computers",
      "smartphones",
      "gaming",
      "processors",
      "tvs",
      "headphones",
    ],
  },
});

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
    enum: [
      "computers",
      "smartphones",
      "gaming",
      "processors",
      "tvs",
      "headPhones",
    ],
  },
});

const headphonesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  color: {
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
    enum: [
      "computers",
      "smartphones",
      "gaming",
      "processors",
      "tvs",
      "headphones",
    ],
  },
});

const laptops = mongoose.model("Laptops", laptopSchema);
const phones = mongoose.model("Phones", phoneSchema);
const consoles = mongoose.model("Consoles", consoleSchema);
const procesors = mongoose.model("Processors", procesorSchema);
const tvs = mongoose.model("Tvs", tvSchema);
const headphones = mongoose.model("Headphones", headphonesSchema);

module.exports = { laptops, phones, consoles, procesors, tvs, headphones };
