const Post = require("../modules/postModel");
const Like = require("../modules/likeModel");

exports.unlikePost = async (req , res) => {

    try{

        const {post, like} = req.body;

        const deletedLike = await Like.findOneAndDelete({post: post, _id: like});

        if(!deletedLike){
            return res.status(404).json({
                success: false,
                message: "Like not found or already removed",
            });
        }

        const updatedPost = await Post.findByIdAndUpdate(
        post,
        {$pull: {likes: deletedLike._id}},
        { new: true })
        .populate("likes")
        .populate("comments")
        .exec();

        return res.status(200).json({

            success: true,
            message: "Post unlike successfully",
            post: updatedPost

        });

    }catch(error){

        return res.status(500).json({
            success: false,
            message: "Error while unliking the post",
            error: error.message,
        })

    }

}