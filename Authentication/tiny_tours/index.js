import express from "express";
import dotenv from "dotenv";
import cors from "express";
import connectDB from "./config/db.js";
import User from "./models/User.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 6000;

app.post("/signup", async (req, res) => {
    const { name, email, mobile, password } = req.body;

    const newUser = new User({
        name,
        email,
        mobile,
        password
    });

    if (!name?.trim() || !email?.trim() ||  !mobile?.trim() || !password?.trim()) {
        return res.status(400).json({
            success: false,
            message: "All fields are required",
        });
    }

    // Regex patterns
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[6-9]\d{9}$/;

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
});

app.post("/login", async (req, res) => {

    const { userName, password } = req.body;

    if (!userName || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    let user;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[6-9]\d{9}$/;

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


    if (user.password !== password) {
        return res.status(401).json({
            success: false,
            message: "Invalid password",
        });
    }
    return res.status(200).json({
        success: true,
        message: "Login successful",
        data: {
            email: user.email,
        },
    });

});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

connectDB();
