const mongoose = require("mongoose");


const OTPSchema = new mongoose.Schema({
    
    email:{
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires: 5*60,
    }

});



async function sendVerificationEmail(email, otp){

    try{
        const emailResponse = await mailSender(email, "verification Email from StudyNotion", otp);
        console.log("Email sent successfully ", emailResponse);
    }
    catch(error){
        console.log("Error Occured while Sending Email" , error);
        throw error;
    }

}

OTPSchema.pre("save", async )



module.exports = mongoose.model("OTP", OTPSchema);