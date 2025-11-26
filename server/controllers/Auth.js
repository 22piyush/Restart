const User = require("../models/User");
const OTP = require("../models/OTP");

exports.sendOTP = async (req, res) => {

    const {email} = req.body;

    const checkUserPresent = await User.findOne({email});
    

}