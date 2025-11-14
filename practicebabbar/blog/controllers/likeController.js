const Post = require("../modules/postModel");
const Like = require("../modules/likeModel");

exports.likePost = async (req , res) => {

    try{

        const {post, user} = req.body;
        const like  = new Like({
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

        return res.status(500).json({
            error: "Error while creating like",
        })

    }

};