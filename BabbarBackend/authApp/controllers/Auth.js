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
                success:false,
                message:'User already exists'
            })
        }


        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password, 10)
        }
        catch(error){
         console.log(error);
            return res.status(500).json({
                success:false,
                message:'Error Hashing Password'
            })
        
        }


        const user = await User.create({
            name,email,password:hashedPassword, role
        });

        return res.status(200).json({
            success:true,
             message:'User created Successfully'
        })

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Something wend wrong while creating User'
        })
    }
};


exports.login = async (req,res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                success: false,
                message:"Please fill all details carefully",
            });
        }

        let user = await User.findOne({email});

        if(!user){
            return res.status(401).json({
                success: false,
                message:"User is not registered"
            })
        }

        const payload = {
            email:user.email,
            id:user._id,
            role:user.role,
        }
        if(await bcrypt.compare(password,user.password)){

            let token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:"2h", } );

            user = user.toObject();
            user.token = token;
            user.password = null;

            const options = {

               expires: new Date( Date.now() + 3 * 24 * 60 * 60 * 1000),
               httpOnly: true,  

            }

            res.cookie("token", token, options).status(200).json({
                success: true,
                token,
                user,
                message:'User Logged in successfully'
            });

        }else{
            return res.status(403).json({
                success: false,
                message:"Password Incorrect"
            })
        }

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Something wend wrong Login'
        })
    }
};
