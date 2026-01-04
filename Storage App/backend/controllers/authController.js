const User = require("../modules/Users");
const crypto = require("crypto");

exports.mySecretKey = 'storage-app-123#$';

exports.registerUser = async (req, res) => {
    try {
        const { email, password, mobile, role } = req.body;

        const userExists = await User.findOne({ $or: [{ email, mobile }] });
        if (userExists) {
            return res.status(400).json({ message: "User with this email or mobile already exists" });
        }

        const user = await User.create({
            email,
            password,
            mobile,
            role
        });

        res.status(201).json({ success: true, message: "User registered successfully" });
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

        const cookiePayload = JSON.stringify( {
            id: user._id.toString(),
            expiry: Math.round(Date.now() / 1000 + 10),
        });

        const signature = crypto
        .createHash('sha256')
        .update(cookiePayload)
        .update(this.mySecretKey)
        .digest("base64url")

        const signedCookiePayload = `${Buffer.from(cookiePayload).toString("base64url")}.${signature}`

        res.cookie(
            "uid",
            signedCookiePayload,
            // Buffer.from(JSON.stringify(cookiePayload)).toString("base64url"),
            {
                httpOnly: true,
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