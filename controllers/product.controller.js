const Product = require("../models/product.model");

const createProduct = async (req, res) => {
  const { name, bgColor, pannelColor, textColor, price, discount } = req.body;
  if (
    [name, bgColor, pannelColor, textColor, price].some(
      (field) => !field?.trim()
    )
  ) {
    req.flash("error", "Something went wrong : All fields are required.");
    return res.status(400).send("All fields are required");
  }

  try {
    let product = await Product.create({
      name,
      image: req.file.buffer,
      bgColor,
      textColor,
      pannelColor,
      price,
      discount,
    });

    if (!product) {
      res.flash("error", "Error while creating the product");
      return res.redirect("/owner/admin/create");
    }

    req.flash("success", "Product created successfully");
    res.redirect("/owner/admin");
  } catch (error) {
    res.flash(
      "error",
      "Error while creating the product : Internal server error"
    );
    res.redirect("/");
  }
};

module.exports = {
    createProduct
}