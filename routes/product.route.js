const express = require("express");
const router = express.Router();
const upload = require("../config/multer.config");
const { createProduct } = require("../controllers/product.controller");

router.post("/create", upload.single("image"), createProduct);

module.exports = router;