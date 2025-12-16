const {instance} = require("../config/razorpay");
const Course = require("../models/Course");
const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const {courseEnrollmentEmail} = require("../mail/templates/courseEnrollmentEmail");



// Capture the payment and initiate the Razorpay order 
exports.capturePayment = async (req, res) =>{
    // get courseId and UserID 
    // validation 
    // valid courseID 
    // valid courseDetail 
    // user already pay for the same course 
    // order created 
    

}