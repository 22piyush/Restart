const Todo = require("../models/Todo");

exports.getTodo = async(req , res) => {
    try {
        
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            data:"Internal Server Error",
            message:err.message
        })
    }
}