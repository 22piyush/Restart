import express from "express";
import dotenv from "dotenv";
import cors from "express";
import connectDB from "./config/db.js";
import User from "./models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 6000;


const getKeeper = (req, res, next) => {
    const { name, isSocietyMember } = req.body;
    console.log(`Hello ${name}`);
    console.log(req.body);
    if (isSocietyMember) {
        next();
    } else {
        return res.json({
            message: "Access Denied"
        })
    }
};

const areYouDrunk = (req, res, next) => {
    const { areYouDrunk } = req.body;

    if (areYouDrunk) {
        return res.json({
            message: "Enter is not allowed for drunk individuals."
        });
    } else {
        next();
    }
}

const shamSundarSociety = (req, res) => {
    return res.json({
        message: "Thank you for visiting sham sundar society"
    });
}

const gokuldhamSociety = (req, res) => {
    console.log("Inside gokeldhamSociety controller");

    res.json({
        message: "Thank you for visiting Gokuldham Society"
    });

}

const checkJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            success: false,
            message: "Authorization header missing"
        });
    }

    const token = authHeader.split(" ")[1];

    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch {
        return res.status(401).json({
            success: false,
            message: "Invalid token"
        });
    }
};



app.post("/sham-sundar-society", getKeeper, areYouDrunk, shamSundarSociety);

app.post("/gokuldham-society", getKeeper, areYouDrunk, gokuldhamSociety);


app.get("/api_v1", checkJWT, (req, res) => {
    return res.json({
        message: "API v1 is working"
    })
});

app.get("/api_v2", checkJWT, (req, res) => {
    return res.json({
        message: "API v2 is working"
    })
});

app.post("/signup", async (req, res) => {
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


});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

connectDB();
