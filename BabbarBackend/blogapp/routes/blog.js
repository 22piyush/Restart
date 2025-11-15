const express = require("express");
const router = express.Router();

// Import Controller 
const {likePost} = require("../controllers/LikeController");
const {createComment} = require("../controllers/commentController");
const { createPost} = require("../controllers/postController");

const {unlikePost} =  require("../controllers/unlikeController");
const {getAllPosts} = require("../controllers/allPostsController");

//Mapping Create
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);





// export
module.exports = router;