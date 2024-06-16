const express = require('express')
require('dotenv').config()

const connectDB = require("./utils/db")

const app = express()
const PORT = process.env.PORT || 3000


connectDB()
app.listen(PORT, () => {
    console.log(`Server is started at port : ${PORT}`);
})

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