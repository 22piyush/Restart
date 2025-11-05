const Todo = require("../models/Todo");

exports.updateTodo = async(req , res) => {
    try {
        const {id} = req.body;
        const todo = await Todo.findByIdAndUpdate({_id: id})
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