const express = require("express");
const db = require("./db");

const app = express();
const PORT = 5001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("ANIOR Sneakers Backend is Running!");
});

app.get("/api/products", async (req, res) => {
  try {
    const [products] = await db.query("SELECT * FROM products");
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch products"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});