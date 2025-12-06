const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Order Service is running");
});

app.post("/order", async (req, res) => {
  const { productIds } = req.body;

  try {
    const response = await axios.post("http://cart-service:3002/cart", { productIds });
    const { cartItems, total } = response.data;

    res.json({
      message: "Order placed successfully!",
      cartItems,
      total,
      orderId: Math.floor(Math.random() * 10000)
    });
  } catch (err) {
    res.status(500).json({ error: "Unable to place order" });
  }
});

app.listen(3003, () => {
  console.log("Order service running on port 3003");
});

