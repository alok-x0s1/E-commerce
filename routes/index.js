const express = require("express");
const isLoggedIn = require("../middlewares/auth.middleware");
const Product = require("../models/product.model");
const router = express.Router();

router.get("/", (req, res) => {
  let error = req.flash("error");
  res.render("index", { error });
});

router.get("/shop", isLoggedIn, async (req, res) => {
  const products = await Product.find()
  res.render("shop", {products});
});

module.exports = router;
