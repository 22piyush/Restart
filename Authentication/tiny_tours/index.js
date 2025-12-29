import express from "express";
import dotenv from "dotenv";
import cors from "express";
import connectDB from "./config/db.js";
import User from "./models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { checkJWT } from "./middlewares/jwt.js";
import { getHome } from "./controllers/health.js";
import { postLogin, postSignUp } from "./controllers/auth.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 6000;


app.get("/", getHome);
app.post("/signup", postSignUp);
app.post("/login", postLogin);



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



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

connectDB();
