const express = require("express");
const router = express.Router();

// Import Controller 
const {dummyLink} = require("../controllers/LikeController");
const {createComment} = require("../controllers/commentController");
const { createPost , getAllPosts} = require("../controllers/PostController");




//Mapping Create
router.get("/dummyroute", dummyLink);
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);




// export
module.exports = router;