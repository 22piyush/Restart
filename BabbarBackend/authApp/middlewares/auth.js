const jwt = require("jsonwebtoken");
require("dotenv").config({ silent: true });


exports.auth = (req,res,next) => {
 
    try{

        const token = req.body.token;

        if(!token){
            return res.status(401).json({
                success:false,
                message:'Token Missing'
            });
        }

        // Verify Token 
        try{

            const payload = jwt.verify(token, process.env.JWT_SECRET);

            req.user = payload;

        }catch(error){
            return res.status(401).json({
                success:false,
                message:'Token is Invalid'
            });
        }
        next();

    }catch(error){
        return res.status(401).json({
            success:false,
            message:"Something went wrong, while verifying token"
        });
    }
    
};


exports.isStudent = (req,res,next) => {
    try{
        if(req.user.role != "Student"){
            return res.status(401).json({
                success:false,
                message:"This is protected route for students"
            })
        }
        next();
    }
    catch(error){

        return res.status(401).json({
            success:false,
            message:"User Role is not Matching"
        });

    }
}



exports.isAdmin = (req,res,next) => {
    try{
        if(req.user.role != "Admin"){
            return res.status(401).json({
                success:false,
                message:"This is protected route for admin"
            })
        }
        next();
    }
    catch(error){

        return res.status(401).json({
            success:false,
            message:"User Role is not Matching"
        });

    }
}
