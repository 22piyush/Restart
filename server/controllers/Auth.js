const User = require("../models/User");
const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator");

// send OTP
exports.sendOTP = async (req, res) => {

    try{
        // fetch email from request body 
        const {email} = req.body;

        // Check if  user already exits
        const checkUserPresent = await User.findOne({email});

        if(checkUserPresent){
            return res.status(401).json({
                success: true,
                message:"User already registered",
            })
        }

        // Generate OTP 
        let otp;

        try {
            otp = otpGenerator.generate(6, {
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false,
            });

            await OTP.create({ otp });
        } catch (error) {

            // If duplicate key error, generate again only once
            if (error.code === 11000) {
                otp = otpGenerator.generate(6, {
                    upperCaseAlphabets: false,
                    lowerCaseAlphabets: false,
                    specialChars: false,
                });

                await OTP.create({ otp }); // second attempt
            }
        }

        return otp;


    }
    catch(error){

    }

}

// Sign up


// Login


// change Password