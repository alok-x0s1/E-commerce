require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const connectDB = require("./utils/db");
const { hashPassword } = require("./utils/hashPassword");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");


const userRouter = require("./routes/user.route")

//routes
app.use('/api/v1/users', userRouter)

connectDB();
app.listen(PORT, () => {
  console.log(`Server is started at port : ${PORT}`);
});

/*

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is started at port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("mongoDb connection failed !!", error);
  });

*/