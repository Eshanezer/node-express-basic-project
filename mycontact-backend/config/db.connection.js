const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
    console.log("DB CONNECTED", connect.connection.host);
  } catch (err) {
    console.log(err);
    // It allows you to exit the current Node.js process with a specified exit code.
    process.exit(1);
  }
};

module.exports = connectDb;
