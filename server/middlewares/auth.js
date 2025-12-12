const jwt = require("jsonwebtoken");
require("dotenv").config();
const user = require("../models/User");


// auth 
exports.auth = async (req, res, next) => {
    try{
        // extract token 
        const token = req.cookies.token || req.body.token || req.header("Authorisation").replace("Bearer ","");
   
        if(!token){
            return res.status(401).json({
                success:false,
                message:"Token is missing"
            });
        }
    }
    catch(error){

    }
}