const express = require("express");
const router = express.Router();
const postsController = require("../controllers/postsController");

router.post("/addpost", postsController.postSubmitPost);
router.get("/getallposts", postsController.exploreAllPosts);
router.post("/likeorunlikepost", postsController.changeLike);

module.exports = router;
