const { hashPassword } = require("../utils/hashPassword");
const User = require("../models/user.model");
const generateToken = require("../utils/generateToken");

const signupUser = async (req, res) => {
  const { username, email, password, fullname } = req.body;

  if ([username, password, email, fullname].some((field) => !field?.trim())) {
    return res.status(400).send("All fields are required");
  }

  try {
    const existedUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (existedUser) {
      return res
        .status(400)
        .send("User with this username or email already exists. Please login.");
    }

    const hashedPassword = await hashPassword(password);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      fullname,
    });

    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    if (!createdUser) {
      return res.status(500).send("Server error while creating the user.");
    }

    const token = generateToken({
      _id: user._id,
      username: user.username,
      email: user.email,
    });

    return res.cookie("token", token).redirect("/shop");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error. Please try again later.");
  }
};

module.exports = {
  signupUser,
};
