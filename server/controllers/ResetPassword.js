const User = require("../models/User");
const mailSender = require("../utils/mailSender");


// resetPasswordToken
exports.resetPasswordToken = async (req, res) => {

    // get email from req body 
    const email = req.body.email;

    // check user for this email, email validation 
    const user = await User.findOne({email: email});
    if(!user){
        return res.json({
            success: false,
            message:"Your Email is not registered with us"
        })
    }

    // generate token 
    
    // update user buy adding token and  expiration time
    // create url
    // send mail containing the url
    // return response 


    const url = `http://localhost:3000/update-password/${token}`
}


// resetPassword