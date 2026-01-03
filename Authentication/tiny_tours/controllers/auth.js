
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const postSignUp = async (req, res) => {
    const { name, email, mobile, password } = req.body;

    const existingUserEmail = await User.findOne({ email });
    const existingUserMob = await User.findOne({ mobile });

    if (existingUserEmail) {
        return res.status(400).json({
            success: false,
            message: "User with this email already exists"
        });
    }

    if (existingUserMob) {
        return res.status(400).json({
            success: false,
            message: "User with this mobile already exists"
        });
    }

    // Generate Key 
    const salt = bcrypt.genSaltSync(10);
    const encryptedPassword = bcrypt.hashSync(password, salt);

    const newUser = new User({
        name,
        email,
        mobile,
        password: encryptedPassword
    });


    if (!name?.trim() || !email?.trim() || !mobile?.trim() || !password?.trim()) {
        return res.status(400).json({
            success: false,
            message: "All fields are required",
        });
    }

    // Regex patterns
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^\d{10,}$/;

    // Name validation
    if (name.trim().length < 2) {
        return res.status(400).json({
            success: false,
            message: "Name must be at least 2 characters",
        });
    }

    // Email validation
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            message: "Invalid email format",
        });
    }

    // Mobile validation
    if (!mobileRegex.test(mobile)) {
        return res.status(400).json({
            success: false,
            message: "Invalid mobile number",
        });
    }

    // Password validation
    if (password.length < 6) {
        return res.status(400).json({
            success: false,
            message: "Password must be at least 6 characters",
        });
    }

    try {
        const savedUser = await newUser.save();
        return res.status(200).json({
            success: true,
            data: savedUser,
            message: "User registered successfully"
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "User registration failed",
            error: error
        });
    }
};


const postLogin = async (req, res) => {

    const { userName, password } = req.body;

    if (!userName || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    let user;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^\d{10,}$/;

    if (emailRegex.test(userName)) {
        user = await User.findOne({ email: userName });
    } else if (mobileRegex.test(userName)) {
        user = await User.findOne({ mobile: userName });
    } else {
        return res.status(400).json({
            success: false,
            message: "Enter valid email or mobile number",
        });
    }

    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    if (isPasswordCorrect) {

        const jetToken = jwt.sign({
            id: user._id,
            email: user.email,
        },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h",
            }
        );

        return res.status(200).json({
            success: true,
            message: "Login successful",
            data: {
                email: user.email,
            },
            jwtToken:jetToken
        });
    } else {
        return res.status(401).json({
            success: false,
            message: "Invalid password",
        });
    }


}

export {postSignUp , postLogin}
