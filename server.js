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

// const productSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//     min: 0,
//   },
//   category: {
//     type: String,
//     lowercase: true,
//     enum: [
//       "computers",
//       "smartphones",
//       "gaming",
//       "components",
//       "tvs",
//       "accesories",
//     ],
//   },
// });

// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: [true, "Username cannot be black"],
//   },
//   password: {
//     type: String,
//     required: [true, "Password cannot be empty"],
//   },
// });

// const Users = mongoose.model("users", userSchema);
// const Products = mongoose.model("products", productSchema);

app.get("/products", async (req, res) => {
  if (req.session.user_id) {
    const products = await Products.find({});
    res.send(products);
  } else {
    res.send("please log in");
  }
});

app.get("/products", async (req, res) => {
  const products = await Products.find({});
  res.send(products);
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
  const { username, password } = req.body;
  const user = new Users({
    username,
    password,
  });
  await user.save();
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findOne({ username });
  if (password !== user.password) {
    res.send("invalid username or password");
  } else {
    res.send("logged in");
    req.session.user_id = user._id;
  }
});

app.post("/logout", async (req, res) => {
  res.session.user_id = null;
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

// app.get("*", (req, res) => {
//   res.send("i dont know that path"); // Route for EVERY route, but needs to be specified at the end not to ignore other router
// });

// MORE ADVANCED STUFF BELOW!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const testArray = [1, 2, 3];

app.post("/post", (req, res) => {
  const { qty } = req.body;
  testArray.push({ qty }); // Mimic adding data to database, I add entered qty to test array.
  res.send(`You counted ${qty} numbers`); // displays what's in request body which was sent in json from frontend
  res.render("added!");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
