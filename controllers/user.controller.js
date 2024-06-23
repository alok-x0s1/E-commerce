const { hashPassword, verifyPassword } = require("../utils/hashPassword");
const User = require("../models/user.model");
const generateToken = require("../utils/generateToken");

const signupUser = async (req, res) => {
  const { username, email, password, fullname } = req.body;

  if ([username, password, email, fullname].some((field) => !field?.trim())) {
    req.flash("error", "Something went wrong : All fields are required.");
    return res.status(400).send("All fields are required");
  }

  try {
    const existedUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (existedUser) {
      req.flash("error", "Something went wrong : User with this username or email already exists.");
      return res.redirect("/")
      // return res
      //   .status(400)
      //   .send("User with this username or email already exists. Please login.");
    }

    const hashedPassword = await hashPassword(password);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      fullname,
    });

    const createdUser = await User.findById(user._id).select("-password");

    if (!createdUser) {
      req.flash("error", "Something went wrong : While creating user");
      return res.redirect("/")
      // return res.status(500).send("Server error while creating the user.");
    }

    const token = generateToken({
      _id: user._id,
      username: user.username,
      email: user.email,
    });

    return res.cookie("token", token).redirect("/shop");
  } catch (error) {
    console.error(error);
    req.flash("error", "Something went wrong");
    return res.redirect("/")
    // return res.status(500).send("Server error. Please try again later.");
  }
};

const loginUser = async (req, res) => {
  const { email, username, password } = req.body;

  if(!(email || username )) {
    req.flash("error", "All fields are required.");
    return res.redirect("/")
    // return res.status(400).send("All fields are required");
  }

  try {
    const existedUser = await User.findOne({
      $or: [{ username }, { email }],
    });
  
    if (!existedUser) {
      req.flash("error", "User with this username or email not exists, Please login");
      return res.redirect("/")
      // return res
        // .status(400)
        // .send("User with this username or email not exists. Please signup.");
    }

    const isPasswordCorrect = await verifyPassword(password, existedUser.password)
    if(!isPasswordCorrect) {
      req.flash("error", "Incorrect password. Please try again");
      return res.redirect("/")
      // return res
      //   .status(400)
      //   .send("Incorrect password. Please try again.");
    }

    const token = generateToken({
      _id: existedUser._id,
      username: existedUser.username,
      email: existedUser.email,
    });

    return res.cookie("token", token).redirect("/shop");    
  } catch (error) {
    console.error(error);
    req.flash("error", "Something went wrong");
    return res.redirect("/")
    // return res.status(500).send("Server error. Please try again later.");
  }
};

const logoutUser = (req, res) => {
  res.cookie("token", "")
  res.redirect("/")
}

module.exports = {
  signupUser,
  loginUser,
  logoutUser
};