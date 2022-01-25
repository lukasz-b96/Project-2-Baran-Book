const mongoose = require("mongoose");

mongoose
  .connect(
    process.env.MDB_URI,
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .catch((error) => console.log("db auth error"));

mongoose.connection.on(`connected`, () => {
  console.log("mongo db status: connected");
});

mongoose.connection.on("error", () => {
  console.log("mongo db status: error");
});

module.exports = mongoose;
