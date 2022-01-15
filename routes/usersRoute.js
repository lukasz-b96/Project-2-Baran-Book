const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

// async to use try catch insted of callback function
router.post("/register", async (req, res) => {
  //check if user exists
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (user) {
      return res.status(401).send("user exists");
    }
  } catch (error) {
    return res.status(500).send("internal server problem");
  }

  try {
    const newuser = new User(req.body);
    await newuser.save();
    res.status(201).send("user registered succesfully");
  } catch (error) {
    console.error(error);
    return res.status(401).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(401).send("invalid credentials");
    }
  } catch (error) {
    console.error(error);
    return res.status(401).json(error);
  }
});

router.get("/getallusers", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

module.exports = router;
