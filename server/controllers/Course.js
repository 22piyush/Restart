const Course = require("../models/Course");
const Tag = require("../models/Tags");
const User = require("../models/User");
const {uploadImageToCloudinary} = require("../utils/imageUploader");


// create course handler function 
exports.createCourse = async (req, res) => {
    
    try{

        //fetch data 
        const {courseName, courseDescription, whatYouWillLearn, price, tag} = req.body;

        // get thumbnail 
        const thumbnail = req.files.thumbnailImage;


        // validation 
        if(!courseName || !courseDescription || !whatYouWillLearn || !price || !tag || !thumbnail){
            return res.status(400).json({
                success: false,
                message:"All fields are requireds",
            });
        }


        // check for instructor 
        const userId = req.user.id;
        const instructorDetails = await User.findById(userId);

        if(!instructorDetails){
            return res.status(404).json({
                success: false,
                message: "Instructor Details not found",
            });
        }


        const tagDetails = await Tag.findById(tag);
        if(!tagDetails){
            return res.status(401).json({
                success: false,
                message: "Tag Details not found",
            });
        }

        // upload image to cloudinary 
        const thumbnailImage = await uploadImageToCloudinary(thumbnail, process.env.FOLDER_NAME)

    }
    catch(error){

    }
    
}

