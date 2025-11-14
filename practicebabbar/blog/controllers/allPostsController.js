const Post = require("../modules/postModel");

exports.getAllPosts = async (req,res) => {

    try{

        const posts = await Post.find().populate("likes").populate("comments").exec();
        res.json({
            posts,
        });

    }catch(error){

        return res.status(500).json({
            error: "Error while fetching Posts",
        });

    }

}