const User = require("../models/User");
const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator");

exports.sendOTP = async (req, res) => {

    try{

        const {email} = req.body;

        const checkUserPresent = await User.findOne({email});

        if(checkUserPresent){
            return res.Status(401).json({
                success:false,
                message:"User already register",
            })
        }
    }
    catch(error){

    }

}