const { signedCookie } = require("cookie-parser");
const User = require("../modules/Users");
const crypto = require("crypto");

exports.registerUser = async (req, res) => {
    try {
        const { email, password, mobile, role } = req.body;

        const hashedPassword = crypto
        .createHash('sha256')
        .update(password)
        .digest("hex")

        const userExists = await User.findOne({ $or: [{ email, mobile }] });
        if (userExists) {
            return res.status(400).json({ message: "User with this email or mobile already exists" });
        }

        const user = await User.create({
            email,
            password : hashedPassword,
            mobile,
            role
        });

        res.status(201).json({ success: true, message: "User registered successfully", data:user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.loginUser = async (req, res) => {
    try {
        const { identifier, password } = req.body // It can be email or mobile

        const user = await User.findOne({
            $or: [{ email: identifier }, { mobile: identifier }]
        });

        if (!user) return res.status(400).json({ message: "Username not found" });

        const enteredPasswordHash = crypto
        .createHash('sha256')
        .update(password)
        .digest("hex")

        if(user.password !== enteredPasswordHash){
            return res.status(400).json({ message: "Invalid Credientials" });
        }


        const cookiePayload = JSON.stringify( {
            id: user._id.toString(),
            expiry: Math.round(Date.now() / 1000 + 10),
        });

        res.cookie(
            "uid",
            cookiePayload,
            {
                httpOnly: true,
                signed:true,
                maxAge: 60 * 1000 // 60 seconds
            }
        );

        res.json({ success: true, message: "Logged in successfully" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getCurrentUser = (req, res) => {
  res.status(200).json({
    name: req.user.name,
    email: req.user.email,
  });
};

exports.logoutUser = (req, res) => {
  res.clearCookie("uid");
  res.status(204).end();
};