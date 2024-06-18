require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const expressSession = require("express-session");
const flash = require("connect-flash");
const connectDB = require("./utils/db");

const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET,
  })
);
app.use(flash());

// Imports
const userRouter = require("./routes/user.route");
const indexRouter = require("./routes/index");

// Routes
app.use("/", indexRouter);
app.use("/users", userRouter);

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
