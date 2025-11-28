const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("../models/User");


exports.auth = async (req, res, next) => {

    try{    

        const token = req.cookies.token 
            || req.body.token 
            || req.header("Authorisation").replace("Bearer","");

        if(!token){
            return res.status(401).json({
                success:false,
                message:"Token is missing"
            });
        }

        try{
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decode;
        }
        catch(error){
            return res.status(401).json({
                success:false,
                message:'Token is invalid'
            });
        }

    }
    catch(error){

        return res.status(401).json({
            success:false,
            message:"Something wend wrong while validating the token"
        })

    }
    
};


exports.isStudent = async (req, res, next) => {

    try{
        
        if(req.user.accountType !== "Student"){
            return res.status(401).json({
                success:false,
                message:"This is a protected route for Students Only"
            });
        }
        next();

    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"User role cannot be verified, please try again"
        })
    }

};


exports.isInstructor = async (req, res, next) => {

    try{
        
        if(req.user.accountType !== "Instructor"){
            return res.status(401).json({
                success:false,
                message:"This is a protected route for Instructor Only"
            });
        }
        next();

    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"User role cannot be verified, please try again"
        })
    }

};


exports.isAdmin = async (req, res, next) => {

    try{
        
        if(req.user.accountType !== "Admin"){
            return res.status(401).json({
                success:false,
                message:"This is a protected route for Admin Only"
            });
        }
        next();

    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"User role cannot be verified, please try again"
        })
    }

};