const express = require("express");
const cors = require("cors");

const port = 5000;
const app = express();

const products = require("./db/data.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Home Route");
});

// filter product by productId

app.get("/products/:id", async (req, res) => {
  const productId = req.params.id;
  const filteredProduct = products.filter((product) =>
    product.id.includes(productId)
  );
  res.send(filteredProduct[0]);
});

// Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
