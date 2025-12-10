const mongoose = require("mongoose");


const courseSchema = new mongoose.Schema({
    
    courseName:{
        type:String,
    },
    courseDescription: {
        type:String,
    },
    instructor: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    whatYouWillLearn:{
        type:String
    },
    courseContent: [
        {
            type:String,
            ref:"Section"    
        }
    ],
    ratingAndRevision:[
        {
            type:mongoose.Schema.Types.ObjectId,
        }
    ]

});

module.exports = mongoose.model("Course", courseSchema);