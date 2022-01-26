require("dotenv").config();
require("./server/models/database");

const express = require("express");
const app = express();

// const usersRoute = require("./server/routes/usersRoute");
// const postsRoute = require("./server/routes/postsRoute");

const usersRoute22 = require("./server/routes/usersRoute");
const postsRoute22 = require("./server/routes/postsRoute");
const path = require("path");

app.use(express.json({ limit: "25mb" }));
app.use("/api/users/", usersRoute22);
app.use("/api/posts/", postsRoute22);

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV == "production") {
  app.use("/", express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}

app.listen(port, () => console.log(`Server running on port ${port} `));
