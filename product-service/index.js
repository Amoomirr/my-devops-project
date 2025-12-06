const express = require("express");
const app = express();

const products = [
  { id: 1, name: "Fitness Band", price: 799 },
  { id: 2, name: "Water LED Diya", price: 299 },
  { id: 3, name: "Trendy Shoes", price: 1499 }
];

app.get("/", (req, res) => {
  res.send("Product Service is running");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(3001, () => {
  console.log("Product service running on port 3001");
});

