const Todo = require("../models/Todo");

exports.deleteTodo = async(req , res) => {
    try {

        const {id} = req.body;
        const todo = await Todo.findByIdAndDelete({_id: id})

        res.status(200).json({ success: true, message: "Deleted Successfully" });
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