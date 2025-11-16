const jwt = require("jsonwebtoken");
require("dotenv").config({ silent: true });


exports.auth = (req,res,next) => {

    try{

        const token = req.body.token;

        if(!token){
            return res.status(401).json({
                success:false,
                message:"Token Missing"
            })
        }

        try{

            const payload = jwt.verify(token, process.env.JWT_SECRET);
            req.user = payload;

        }catch(error){
            return res.status(401).json({
                success:false,
                message:'Token is Invalid'
            })
        }
        next();

    }catch(error){
        return res.status(401).json({
            success: false,
            message: "Something went wrong, while verifying token"
        })
    }

}


