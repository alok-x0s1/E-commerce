const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/auth.middleware");

router.get("/admin", isLoggedIn, (req, res) => {
  let success = req.flash("success");
  res.render("createproducts", { success });
});

module.exports = router;