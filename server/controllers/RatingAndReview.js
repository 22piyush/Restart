const ratingAndreview = require("../models/RatingAndReview");
const Course = require("../models/Course");

// createRating 
exports.createRating = async (req,res) => {
    try{
        // get user id 
        // fetch data from req body 
        // check if user enrolled or not
        // check if user already review the course 
        // create rating and review  
        // update course with rating / review
        // return response 
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message:error.message
        });
    }
}



// getAverageRating 



// getAllRating 

