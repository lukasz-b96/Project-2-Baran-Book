const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://lukasz:mkCTXxr3dwjtc37@cluster0.mibmb.mongodb.net/test`,
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
