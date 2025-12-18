const ratingAndreview = require("../models/RatingAndReview");
const Course = require("../models/Course");

// createRating 
exports.createRating = async (req, res) => {
    try {
        // get user id 
        const userId = req.user.id;
        // fetch data from req body 
        const { rating, review, courseId } = req.body;
        // check if user enrolled or not
        const courseDetails = await Course.findOne(
            {
                _id: courseId,
                studentsEnrolled: { $eleMatch: { $req: userId } },
            });
         
        if(!courseDetails){
            return res.status(404).json({
                success: false,
                message: "Student is not enrolled in the course"
            });
        }    
            
        // check if user already review the course 
        const alreadyReviewed = await ratingAndreview.findOne({
            user: userId,
            course: courseId
        });

        // create rating and review  
        if(alreadyReviewed){
            return res.status(403).json({
                success: false,
                message: "Course is already reviewed by the user"
            });
        }
        // update course with rating / review
        // return response 
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}


// getAverageRating



// getAllRating 

