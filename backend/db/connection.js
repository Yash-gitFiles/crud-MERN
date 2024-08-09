const mongoose = require("mongoose");

function connectDB() {
  console.log("connection success");
  return mongoose.connect("mongodb://127.0.0.1:27017/crud_mern");
}

module.exports = connectDB;
