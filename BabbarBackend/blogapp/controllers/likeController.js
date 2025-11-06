const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.likePost = async (req, res) => {
  try {
    const { post, user } = req.body;

    if (!post || !user) {
      return res.status(400).json({
        success: false,
        message: "Post ID and user are required",
      });
    }

    // Check if the user already liked this post
    const existingLike = await Like.findOne({ post, user });
    if (existingLike) {
      return res.status(400).json({
        success: false,
        message: "User already liked this post",
      });
    }

    // Create a new like
    const like = new Like({ post, user });
    const savedLike = await like.save();

    // Update post by adding like reference
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: savedLike._id } },
      { new: true }
    )
      .populate("likes") // optional
      .exec();

    return res.status(201).json({
      success: true,
      message: "Post liked successfully",
      post: updatedPost,
    });
  } catch (error) {
    console.error("Error while liking post:", error.message);
    return res.status(500).json({
      success: false,
      error: "Error while liking post",
      details: error.message,
    });
  }
};
