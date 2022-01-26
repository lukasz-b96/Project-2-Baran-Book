const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

// async to use try catch insted of callback function
exports.register = async (req, res) => {
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
      // console.log("|" + req.body.password + "|");
      // console.log(hash);

      // console.log(req.body);
      // console.log(user);
      user.save();
      res.status(201).send("user registered succesfully");
    });
  } catch (error) {
    console.error(error);
    return res.status(401).json(error);
  }
};

// NOT ASYNC SO .then
exports.login = (req, res) => {
  let fetchedUser;
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed",
        });
      }
      bcrypt.hash(req.body.password, 10).then((hash) => {
        //console.log("\n|" + req.body.password + "|  body");
        //console.log("|" + user.password + "|   user");
        //console.log(hash);
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
};

exports.getAll = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

exports.follow = async (req, res) => {
  const { currentuserid, getUserid } = req.body;
  //console.log(req.body);
  try {
    var currentuser = await User.findOne({ _id: currentuserid });
    var currentUserFollowing = currentuser.following;
    currentUserFollowing.push(getUserid);

    currentuser.following = currentUserFollowing;

    await User.updateOne({ _id: currentuserid }, currentuser);

    var getUser = await User.findOne({ _id: getUserid });
    var getUserFollowers = getUser.followers;

    getUserFollowers.push(currentuserid);

    getUser.followers = getUserFollowers;

    await User.updateOne({ _id: getUserid }, getUser);

    res.send("Followed successfully");
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

exports.unfollow = async (req, res) => {
  const { currentuserid, getUserid } = req.body;
  //console.log(req.body);
  try {
    var currentuser = await User.findOne({ _id: currentuserid });
    var currentUserFollowing = currentuser.following;

    const temp1 = currentUserFollowing.filter(
      (obj) => obj.toString() !== getUserid
    );

    currentuser.following = temp1;

    await User.updateOne({ _id: currentuserid }, currentuser);

    var getUser = await User.findOne({ _id: getUserid });
    var getUserFollowers = getUser.followers;

    const temp2 = getUserFollowers.filter(
      (obj) => obj.toString() !== currentuserid
    );

    getUser.followers = temp2;

    await User.updateOne({ _id: getUserid }, getUser);

    res.send("UnFollowed successfully");
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
