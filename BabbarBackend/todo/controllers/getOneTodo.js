const Todo = require("../models/Todo");

exports.getOneTodo = async(req , res) => {
    try {

        const id = req.params.id;
        const todo = await Todo.findById({_id: id})

        if (!todo) {
            return res.status(400).json({ success: false, message: "Not Found" });
        }

        return res.status(200).json({ success: true, data: todo, message: "Found Todo" });
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