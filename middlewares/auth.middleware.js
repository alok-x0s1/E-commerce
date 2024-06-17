const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const verifyJWT = async (req, res, next) => {
  try {
    const token =
      req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return res.redirect("/login");
      // res.status(401).send("Unauthorized request")
    }
  
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decodedToken?._id).select("-password");
    if (!user) {
      return res.status(401).send("Invalid access token");
    }
  
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send(error?.message || "Invalid access Token");
  }
};

module.exports = verifyJWT