const Data = require("../models/Model");

exports.createData = async(req,res) => {
    try{

        const {title , description} = req.body;
        const response = await Data.create({title, description});

        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry Created Successfully"
            }
        )

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