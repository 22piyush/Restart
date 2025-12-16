const {instance} = require("../config/razorpay");
const Course = require("../models/Course");
const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const {courseEnrollmentEmail} = require("../mail/templates/courseEnrollmentEmail");



// Capture the payment and initiate the Razorpay order 
exports.capturePayment = async (req, res) =>{
    // get courseId and UserID 
    const {course_id} = req.body;
    const userId = req.user.id;
    // validation 
    // valid courseID 
    if(!course_id){
        return res.json({
            success: false,
            message: "Please provide valid course ID"
        });
    }
    // valid courseDetail
    let course;
    try{
        course = await course.findById(course_id);
        if(!course){
            return res.json({
                success : false,
                message: "Could not find the course"
            });
        }
        // user already pay for the same course 
        const uid = new mongoose.Types.ObjectId(userId);
        if(course.studentsEnrolled.includes(uid)){
            return res.status(201).json({
                success: false,
                message: "Student is already enrolled"
            });
        }
    } 
    catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
    // order created 
    // return response 
}