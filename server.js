const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
mongoose.connect("mongodb://localhost:27017/eCommerceDatabase");
app.use(cors());
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "secret" }));

const Laptops = require("./models/laptops");
const Headphones = require("./models/headphones");
const Consoles = require("./models/consoles");
const Phones = require("./models/phones");
const Processors = require("./models/processors");
const Tvs = require("./models/tvs");

const User = require("./models/user");

let loggedIn = false;

app.get("/secret", async (req, res) => {
  if (loggedIn) {
    const products = await Laptops.find({});
    res.send(products);
  } else {
    res.send("please log in");
  }
});

// THIS ABOVE IS ROUTE ONLY FOR LOGGED IN USERS

app.get("/laptops", async (req, res) => {
  const laptops = await Laptops.find({});
  res.send(laptops);
});

app.get("/headphones", async (req, res) => {
  const headphones = await Headphones.find({});
  res.send(headphones);
});

app.get("/consoles", async (req, res) => {
  const consoles = await Consoles.find({});
  res.send(consoles);
});

app.get("/phones", async (req, res) => {
  const phones = await Phones.find({});
  res.send(phones);
});

app.get("/processors", async (req, res) => {
  const processors = await Processors.find({});
  res.send(Processors);
});

app.get("/tvs", async (req, res) => {
  const tvs = await Tvs.find({});
  res.send(Tvs);
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Products.findById(id);
  res.send(product);
});

app.post("/products", async (req, res) => {
  try {
    const newProduct = new Products(req.body);
    await newProduct.save();
    res.send(newProduct); // TRY TO ERROR HERE
    res.send("posted");
  } catch (e) {
    res.status(404).send("Invalid product");
  }
});

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const user = new User({
    username,
    email,
    password,
  });
  await user.save();
  loggedIn = true;
  res.send("Logged in succesfuly");
});

app.post("/login", async (req, res) => {
  try {
    const { password } = req.body;
    const user = await User.findOne({ password });
    if (password !== user.password) {
      res.send("invalid username or password");
    } else {
      res.send("logged in");
      loggedIn = true;
    }
  } catch (e) {
    res.status(404).send("Invalid product");
  }
});

app.post("/logout", async (req, res) => {
  try {
    loggedIn = false;
    res.send("Logged out");
  } catch (e) {
    res.send("error");
  }
});

app.get("/users:id", async (req, res) => {
  // endpoint for info about certain user.
});

// app.delete("/Products/:id", async (req, res) => {
//   const product = await Products.findByIdAndDelete(req.params.id);
//   res.send("deleted");
// });

// app.put("/Products/:id", async (req, res) => {
//   const { id } = req.params;
//   const product = Products.findByIdAndUpdate(id, req.body, {
//     runValidators: true,
//     new: true,
//   });
//   console.log(req.body);
//   res.send("PUT!!!");
//   res.send(product);
// });

const arr = [1, 2, 3];

app.get("/test", (req, res) => {
  res.send(`${arr} is the data from pseudo api`);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
