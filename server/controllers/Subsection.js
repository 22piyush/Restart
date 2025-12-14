const SubSection = require("../models/SubSection");
const Section = require("../models/Section");


// create sub Section 
exports.createSubSection = async (req, res) => {
    try{

        // fetch data from Req body 
        const {sectionId, title, timeDuration, description} = req.body;
        // extract file/video
        const video = req.files.videoFile;
        // validation
        if(!sectionId || !title || !timeDuration || !description || !video){
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }
        // upload video to cloudinary 
        // create a sub-section 
        // update section with this sub section ObjectId 
        // return response 

    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: "",
            error: error.message
        })
    }
}