const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config({ silent: true });

exports.signup = async (req,res) => {
    try{

        const {name, email, password, role} = req.body;

        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                success: false,
                message: "User already exits"
            })
        }

        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password, 10)
        }
        catch(error){
           
            return res.status(500).json({
                success: false,
                message: 'Error Hashing Password'
            })
        }

        const user = await User.create({
            success:true,
            message:"User created Successfully"
        })

        return res.status(200).json({
            success:true,
            message:"User created Successfully"
        })

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong while creating User'
        })
        
    }
};