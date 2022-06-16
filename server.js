const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");

mongoose.connect(
  "mongodb+srv://kameal22:Eagles4675@cluster0.wnq6l.mongodb.net/eCommerceDatabase?retryWrites=true&w=majority"
);
app.use(cors());
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "secret", resave: true, saveUninitialized: true }));
require("dotenv").config();

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

app.get("/everything", async (req, res) => {
  const everything = [];

  const laptops = await Laptops.find({});
  const headphones = await Headphones.find({});
  const consoles = await Consoles.find({});
  const phones = await Phones.find({});
  const processors = await Phones.find({});
  const tvs = await Phones.find({});

  everything.push(laptops, headphones, consoles, phones, processors, tvs);
  res.send(everything);
});

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
  res.send(processors);
});

app.get("/tvs", async (req, res) => {
  const tvs = await Tvs.find({});
  res.send(tvs);
});

app.get("/laptops/:id", async (req, res) => {
  const { id } = req.params;
  const laptop = await Laptops.findById(id);
  res.send(laptop);

  console.log(laptop);
});

app.get("/consoles/:id", async (req, res) => {
  const { id } = req.params;
  const console = await Consoles.findById(id);
  res.send(console);
});

app.get("/headphones/:id", async (req, res) => {
  const { id } = req.params;
  const headphone = await Headphones.findById(id);
  res.send(headphone);
});

app.get("/phones/:id", async (req, res) => {
  const { id } = req.params;
  const phone = await Phones.findById(id);
  res.send(phone);
});

app.get("/processors/:id", async (req, res) => {
  const { id } = req.params;
  const processor = await Processors.findById(id);
  res.send(processor);
});

app.get("/tvs/:id", async (req, res) => {
  const { id } = req.params;
  const tv = await Tvs.findById(id);
  res.send(tv);
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
    res.status(404).send("Invalid data");
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

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
