const User = require("../models/User");
const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcryptjs");

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

            // Create OTP IN DB 
            await OTP.create({ email , otp });

            res.status(200).json({
                success:true,
                message:"OTP Sent Successfully"
            });

        } catch (error) {

            // If duplicate key error, generate again only once
            if (error.code === 11000) {
                otp = otpGenerator.generate(6, {
                    upperCaseAlphabets: false,
                    lowerCaseAlphabets: false,
                    specialChars: false,
                });

                await OTP.create({  email , otp  });// second attempt
            }

        }

        return otp;


    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Error while creating OTP"
        });   
    }

}

// Sign up
exports.signUp = async (req, res) => {

    // data fetch from req body 
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

    // Validations
    if (!firstName || !lastName || !email || !password || !confirmPassword || !accountType || !contactNumber || !otp) {
        return res.status(403).json({
            success: false,
            message: "All fields are required"
        });
    }

    // password matching 
    if(password !== confirmPassword){
        return res.status(400).json({
            success:false,
            mesage:"Password and ConfirmPassword value does not match, please try again"
        });
    }

    // check user already exist or not 
    const existUser = await User.findOne({email});
    if(existUser){
        return res.status(400).json({
            success: false,
            message:"User is already registered",
        });
    }

    // find one most recent OTP stored for User
    const recentOtp = await OTP.find({email}).sort({createdAt: -1}).limit(1);

    // validate OTP 
    if(recentOtp.length == 0){
        return res.status(400).json({
            success:false,
            message:"OTP not found"
        })
    }else if (otp !== recentOtp.otp){
        // Invalid OTP 
        return res.status(400).json({
            success: false,
            message:"Invalid OTP",
        });
    }

    // Hashed Password
    const hashedPassword = await bcrypt.hash(password, 10);


    const profileDetails = await Profile.create({
        gender:null,
        dateOfBirth: null,
        about: null,
        contactNumber: null
    });

    //entry created in DB
    const user = await User.create({
        firstName,
        lastName,
        email,
        contactNumber,
        password:hashedPassword,
        accountType,
        additionalDetails:profileDetails._id,
        image:""
    })


}


// Login




// change Password