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

        let otp = otpGenerator.generate(6, {
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false,
        });

        console.log("OTP Generated", otp);

        const result = await OTP.findOne({otp: otp});

        while(result){
            otp = otpGenerator(6, {
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false,
            });
            result = await OTP.findOne({otp: otp});
        }

        const otpPayload = {email, otp};

        const otpBody = await OTP.create(otpPayload);
        console.log(otpBody);

        res.status(200).json({
            success:true,
            message:"OTP Sent Successfully",
            otp,
        });

    }
    catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
};


exports.signUp = async (req, res) => {

    const {

        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        accountType,
        contactNumber,
        otp
        
    } = req.body;


    if(!firstName || !lastName || !email || !password || !confirmPassword || !otp){
        return res.status(403).json({
            success:false,
            message:"All fields are required",
        })
    }

    if(password !== confirmPassword){
        return res.status(403).json({
            success:false,
            message:"Password and ConfirmPassword Value does not match, please try again",
        });
    }


    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(400).json({
            success:false,
            message:"User is already registered",
        });  
    }

    const recentOTP = await OTP.find({email}).sort({createdAt:-1}).limit(1);
    console.log(recentOTP);

    if(recentOTP.length == 0){

        return res.status(400).json({
            success:false,
            message:"OTP Not Found",
        });  

    }else if(otp !== recentOTP){
        
        return res.status(400).json({
            success:false,
            message:"Invalid OTP",
        }); 

    }
    

}