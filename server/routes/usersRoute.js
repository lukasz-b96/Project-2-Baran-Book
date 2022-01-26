const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

// router.post("/addpost",usersController.usersubmitPost)
router.post("/register", usersController.register);
router.post("/login", usersController.login);
router.get("/getallusers", usersController.getAll);
router.post("/followuser", usersController.follow);
router.post("/unfollowuser", usersController.unfollow);
module.exports = router;
