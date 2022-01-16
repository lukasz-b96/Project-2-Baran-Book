const express = require("express");

const app = express();
const dbConnection = require("./db");
const userRoute = require("./routes/usersRoute");
const postRoute = require("./routes/postRoute");

app.use(express.json({ limit: "15mb" }));
app.use(express.urlencoded({ limit: "15mb", extended: true }));

app.use("/api/users/", userRoute);
app.use("/api/posts/", postRoute);

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`server is running on http://http://localhost:${port} :D`)
);
