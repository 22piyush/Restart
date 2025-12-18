const Course = require("../models/Course");
const Tag = require("../models/Tags");
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/imageUploader");


// create course handler function 
exports.createCourse = async (req, res) => {

    try {

        //fetch data 
        const { courseName, courseDescription, whatYouWillLearn, price, tag } = req.body;

        // get thumbnail 
        const thumbnail = req.files.thumbnailImage;


        // validation 
        if (!courseName || !courseDescription || !whatYouWillLearn || !price || !tag || !thumbnail) {
            return res.status(400).json({
                success: false,
                message: "All fields are requireds",
            });
        }


        // check for instructor 
        const userId = req.user.id;
        const instructorDetails = await User.findById(userId);
         
        //HW Verify that userId and instructorDetails._id are same or different 


        if (!instructorDetails) {
            return res.status(404).json({
                success: false,
                message: "Instructor Details not found",
            });
        }


        const tagDetails = await Tag.findById(tag);
        if (!tagDetails) {
            return res.status(401).json({
                success: false,
                message: "Tag Details not found",
            });
        }

        // upload image to cloudinary 
        const thumbnailImage = await uploadImageToCloudinary(thumbnail, process.env.FOLDER_NAME);

        // create an entry for new course 
        const newCourse = await Course.create({
            courseName,
            courseDescription,
            instructor: instructorDetails._id,
            whatYouWillLearn: whatYouWillLearn,
            price,
            tag: tagDetails._id,
            thumbnail: thumbnailImage.secure_url
        });

        //add the new course to the user schema of instructor
        await User.findByIdAndUpdate(
            { _id: instructorDetails._id },
            {
                $push: {
                    courses: newCourse._id,
                }
            },
            { new: true },
        );


        // update the TAG Schema :Homework
        return res.status(200).json({
            success: true,
            message: "Course Created Successfully",
            data: newCourse
        });


    }
    catch (error) {

        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Failed to create Course",
            error: error.message
        })

    }

};


// get All Courses handler function 
exports.showAllCourses = async (req, res) => {
    try {

        //HW change the below statement incrementally 
        const allCourses = await Course.find({}, {
            courseName: true,
            price: true,
            thumbnail: true,
            instructor: true,
            ratingAndReviews: true,
            studentEnrolled: true,
        }).populate("instructor").exec();

        return res.status(200).json({
            success: true,
            message: "Data for all courses fetched successfully",
            data: allCourses
        });

    }
    catch (error) {

        return res.status(500).json({
            success: false,
            message: "Cannot Fetch course data",
            error: error.message,
        })
    }
}


// getCourseDetails 
exports.getCourseDetails = async (req, res) => {
    try{
        // get id 
        const {courseId} = req.body;
        // find course details 
        const courseDetails = await Course.find(
            {_id:courseId}
        ).populate(
            {
                path:"instructor",
                populate:{
                    path:"additionalDetails",
                },
            }
        ).populate("category")
        .populate("ratingAndreview")
        .populate({
            path:"subSection",
        }).exec();

        // validation
        if(!courseDetails){
            return res.status(400).json({
                success: false,
                message: `Could not find the course with ${courseId}`
            });
        }

        // return response 
        return res.status(200).json({
            success: true,
            message: "Course details fetched successfully",
            data: courseDetails
        });

    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

