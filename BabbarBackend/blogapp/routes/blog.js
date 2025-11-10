const express = require("express");
const router = express.Router();

// Import Controller 
const {likePost} = require("../controllers/LikeController");
const {createComment} = require("../controllers/commentController");
const { createPost , getAllPosts} = require("../controllers/PostController");




//Mapping Create
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);





// export
module.exports = router;