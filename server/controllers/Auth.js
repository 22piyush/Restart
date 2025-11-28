const User = require("../models/User");
const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");


// OTP Create And Send Function 
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



// Register User Function 
exports.signUp = async (req, res) => {

    try{
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
        
        const hashedPassword = await bcrypt.hash(password, 10);

        const ProfileDetails = await Profile.create({
            gender:null,
            dateOfBirth:null,
            about:null,
            contactNumber:null
        })

        const user = await User.create({

            firstName,
            lastName,
            email,
            contactNumber,
            password:hashedPassword,
            accountType,
            additionalDetails:ProfileDetails,
            image:`https://api.dicebear.com/5.x/initials/svg?seed=${firstName}%20${lastName}`,

        });

        return res.status(200).json({
            success:true,
            message:"User is registered Successfully",
            user,
        })

    }
    catch(error){

        return res.status(500).json({
            success:true,
            message:"User cannot be registered. Please try again",
        });

    }

};



// Login User Function 
exports.login = async (req, res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(403).json({
                success:false,
                message:"All fields are required. please try again"
            });
        }

        const user = await User.findOne({email}).populate("additionalDetails");
        if(!user){
            return res.status(401).json({
                success:false,
                message:"User is not registered, please signup first",
            });
        }

        if(await bcrypt.compare(password, user.password)){

            const payload = {
                email: user.email,
                id: user._id,
                role:user.role,
            }

            const token = JsonWebTokenError.sign(payload, process.env.JWT_SECRET, {
                expiresIn:"2h",
            });
            user.token = token;
            user.password = undefined;

            const options = {
                expires: new Date(Date.now() + 3*24*60*60*1000),
                httpOnly:true
            }
            res.cookie("token", token, options).status(200).json({
                success:true,
                token,
                user,
                message:"Logged in successfully",
            })
        }else{
            return res.status(401).json({
                success:false,
                message:"Password is incorrect"
            })
        }
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Login failure, please try again later"
        })
    }
};



// Change Password Function 
exports.changePassword = async(req, res) => {

    // get data from req body 
    // get oldPassword, newPassword, confirmNewPassword
    // validation

    // update pwd in DB
    // send mail -- Password update
    // return response 

};


