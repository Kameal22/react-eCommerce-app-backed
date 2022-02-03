//db.getCollection('orders').deleteMany({})

const mongoose = require("mongoose");
const session = require("express-session");
mongoose.connect("mongodb://localhost:27017/eCommerceDatabase");

const laptops = require("./product");

const seedLaptops = [
  {
    name: "Huawei MateBook D 15",
    brand: "Huawei",
    processor: "Intel",
    graphics: "Intel",
    screen: "15,6",
    price: 2399,
    category: "computers",
  },
  {
    name: "Dell Inspiron 5515",
    brand: "Dell",
    processor: "Ryzen",
    graphics: "AMD",
    screen: "15,6",
    price: 3499,
    category: "computers",
  },
  {
    name: "Dell Inspiron G15",
    brand: "Dell",
    processor: "Ryzen",
    graphics: "NVIDIA",
    screen: "15,6",
    price: 3789,
    category: "computers",
  },
  {
    name: "HP Pavilion 15",
    brand: "HP",
    processor: "Ryzen",
    graphics: "AMD",
    screen: "15,6",
    price: 3099,
    category: "computers",
  },
];

laptops.insertMany(seedLaptops);
