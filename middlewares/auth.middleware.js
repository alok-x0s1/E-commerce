const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const isLoggedIn = async (req, res, next) => {
  try {
    const token =
      req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      req.flash("error", "You need to login first.");
      return res.redirect("/");
      // res.status(401).send("Unauthorized request")
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decodedToken?._id).select("-password");
    if (!user) {
      req.flash("error", "Invalid access token");
      // return res.status(401).send("Invalid access token");
    }

    req.user = user;
    next();
  } catch (error) {
    req.flash("error", "Something went wrong");
    res.redirect("/")
    // res.status(401).send(error?.message || "Invalid access Token");
  }
};

module.exports = isLoggedIn;