const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_DB_URI);

    console.log(
      `MongoDb connected - DB host : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Db connection error : ", error);
    process.exit(1);
  }
};

module.exports = connectDB;