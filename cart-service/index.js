const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Cart Service is running");
});

app.post("/cart", async (req, res) => {
  const { productIds } = req.body;

  try {
    const response = await axios.get("http://product-service:3001/products");
    const products = response.data;

    const cartItems = products.filter(p => productIds.includes(p.id));
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    res.json({ cartItems, total });
  } catch (err) {
    res.status(500).json({ error: "Unable to fetch products" });
  }
});

app.listen(3002, () => {
  console.log("Cart service running on port 3002");
});

