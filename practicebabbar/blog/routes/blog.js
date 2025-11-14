const express = require("express");
const router = express.Router();

const { createPost } = require("../controllers/postController");
const {createComment} = require("../controllers/commentController");


router.post("/posts/create", createPost);
router.post("/comments/create", createComment);



module.exports = router;