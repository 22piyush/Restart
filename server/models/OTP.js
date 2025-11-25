const mongoose = require("mongoose");

const OTPSchema = new mongoose.Schema({

    email:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
    },
    createdAt: {
        type:Date,
        default:Date.now(),
        expires: 5*60,
    }

});


async function sendVerificationEmail(email,otp) {
    try{
        const mailRequest = await mailSender(email, "Verification Email from StudyNotion", otp);
        console.log("Email send Succesfully", mailRequest);
    }
    catch(error){
        console.log(error,"Error On Mail");
    }
}

OTPSchema.pre("save", async function(next){
    await sendVerificationEmail(this.email, this.otp);
    next();
})


module.exports = mongoose.model("OTP", OTPSchema);