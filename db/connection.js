const chalk = require("chalk");
const mongoose = require("mongoose");

const url =
  process.env.MONGODB_URI ||
  global.MONGODB_URI ||
  "mongodb://localhost:27017/products";

const connection = mongoose.createConnection(url, {
  connectTimeoutMS: 5000,
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

if (process.env.NODE_ENV !== "test") {
  connection.on("open", () => {
    console.log(
      chalk`{green ✅  Connected to mongoDB database ${connection.name}}`
    );
  });
}

connection.on("error", () => {
  console.error(
    chalk`{red 🔥  Could not connect to mongoDB database ${connection.name}}`
  );
});

module.exports = connection;
