const ratingAndreview = require("../models/RatingAndReview");
const Course = require("../models/Course");

// createRating 
exports.createRating = async (req,res) => {
    try{
        
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message:error.message
        })
    }
}



// getAverageRating 



// getAllRating 

