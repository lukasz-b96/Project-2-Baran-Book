const express = require("express");

const app = express();
const dbConnection = require("./db");
const userRoute = require("./routes/usersRoute");

app.use(express.json());

app.use("/api/users", userRoute);

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`server is running on http://http://localhost:${port} :D`)
);
