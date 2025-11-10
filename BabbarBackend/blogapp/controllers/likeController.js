const Post = require("../models/postModel");
const Like = require("../models/likeModel");


exports.likePost = async (req , res) => {

    try{

        const {post, user} = req.body;
        const like = new Like({
            post, user,
        });
        const savedLike = await like.save();

        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: savedLike._id}}, {new: true})
                          .populate("likes")
                          .exec();
        
        res.json({
            post: updatedPost,
        })                  

    }catch(error){

        console.log(error);
        return res.status(500).json({
            error: "Error while creating like",
        })

    }

};


exports.unlikePost = async (req, res) => {

    try {

        const { post, like } = req.body;

        //Delete the like document
        const deletedLike = await Like.findOneAndDelete({ post: post, _id: like });

        if (!deletedLike) {
            return res.status(404).json({
                success: false,
                message: "Like not found or already removed",
            });
        }

        //Update the Post collection: remove like reference
        const updatedPost = await Post.findByIdAndUpdate(
        post,
        { $pull: { likes: deletedLike._id } },
        { new: true })
        .populate("likes") // optional, if you want to see updated data
        .populate("comments")
        .exec();

        //Respond
        return res.status(200).json({
            success: true,
            message: "Post unliked successfully",
            post: updatedPost,
        });
        
    } catch (error) {

        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error while unliking the post",
            error: error.message,
        });

    }

};