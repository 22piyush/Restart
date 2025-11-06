const express = require("express");
const {likePost} = require("../controllers/likeController")
const { createComment } = require("../controllers/commentController");
const { createPost , getAllPosts } = require("../controllers/postController");
const router = express.Router();

router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost)

module.exports = router;