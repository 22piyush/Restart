const express = require("express");
const router = express.Router();


const { createPost } = require("../controllers/postController");
const {createComment} = require("../controllers/commentController");
const { likePost } = require("../controllers/likeController");
const {unlikePost} = require("../controllers/unlikeController");
const {getAllPosts} = require("../controllers/allPostsController");


router.get("/posts", getAllPosts);
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);


module.exports = router;