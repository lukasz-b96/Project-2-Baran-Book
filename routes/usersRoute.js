const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

// async to use try catch insted of callback function
router.post("/register", async (req, res) => {
  //check if user exists
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    if (user) {
      return res.status(401).send("user exists");
    }
  } catch (error) {
    return res.status(500).send("internal server problem");
  }

  try {
    bcrypt.hash(req.body.password, 10).then((hash) => {
      const user = new User({
        username: req.body.username,
        password: hash,
      });
      console.log("|" + req.body.password + "|");
      console.log(hash);

      // console.log(req.body);
      // console.log(user);
      user.save();
      res.status(201).send("user registered succesfully");
    });
  } catch (error) {
    console.error(error);
    return res.status(401).json(error);
  }
});

router.post("/login", (req, res) => {
  let fetchedUser;
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed",
        });
      }
      bcrypt.hash(req.body.password, 10).then((hash) => {
        console.log("\n|" + req.body.password + "|  body");
        console.log("|" + user.password + "|   user");
        console.log(hash);
      });

      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then((result) => {
      if (!result) {
        return res.status(401).json({
          message: "Auth failed",
        });
      }
      return res.status(200).send(fetchedUser);
    })
    .catch((err) => {
      return res.status(401).json({
        message: "Invalid authentication credentials!",
      });
    });
});

// try {

//   const user = await User.findOne({
//     username: req.body.username,
//   });
//   const {password} = user
//   console.log(password);

//   if (bcrypt.compare(req.body.password, password)) {
//     return res.status(200).send(user);
//   } else {
//     return res.status(401).send("invalid credentials");
//   }
// } catch (error) {
//   console.error(error);
//   return res.status(401).json(error);
// }

router.get("/getallusers", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

router.post("/followuser", async (req, res) => {
  const { currentuserid, receiveruserid } = req.body;
  console.log(req.body);
  try {
    var currentuser = await User.findOne({ _id: currentuserid });
    var currentUserFollowing = currentuser.following;
    currentUserFollowing.push(receiveruserid);

    currentuser.following = currentUserFollowing;

    await User.updateOne({ _id: currentuserid }, currentuser);

    var receiveruser = await User.findOne({ _id: receiveruserid });
    var receiverUserFollowers = receiveruser.followers;

    receiverUserFollowers.push(currentuserid);

    receiveruser.followers = receiverUserFollowers;

    await User.updateOne({ _id: receiveruserid }, receiveruser);

    res.send("Followed successfully");
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

router.post("/unfollowuser", async (req, res) => {
  const { currentuserid, receiveruserid } = req.body;
  console.log(req.body);
  try {
    var currentuser = await User.findOne({ _id: currentuserid });
    var currentUserFollowing = currentuser.following;

    const temp1 = currentUserFollowing.filter(
      (obj) => obj.toString() !== receiveruserid
    );

    currentuser.following = temp1;

    await User.updateOne({ _id: currentuserid }, currentuser);

    var receiveruser = await User.findOne({ _id: receiveruserid });
    var receiverUserFollowers = receiveruser.followers;

    const temp2 = receiverUserFollowers.filter(
      (obj) => obj.toString() !== currentuserid
    );

    receiveruser.followers = temp2;

    await User.updateOne({ _id: receiveruserid }, receiveruser);

    res.send("UnFollowed successfully");
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

module.exports = router;
