import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import BucketList from "./models/BucketList.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());


// MongoDB connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};
connectDB();

// Sample POST API
app.post("/bucketlist", async(req, res) => {

    const {name , description , priority, isCompleted} = req.body

    const newBucketList = new BucketList({
        name,
        description,
        priority,
        isCompleted
    });

    if(priority == undefined){
        return res.json({
            success:false,
            message:"Priority reqyuired"
       })
    }

    const savedBucketList = await newBucketList.save();

    return res.json({
        success:true,
        data:savedBucketList,
        message:"Bucket List created successfully"
    })

});


app.get("/get_bucket_list", async(req, res) => {

    const bucketList  = await BucketList.find().sort({isCompleted: 1});

    return res.json({
        success:true,
        data:bucketList,
        message:"Data fetched successfully"
    })

});


app.patch("/bucketlists/:id/complete", async (req,res) => {
    const {id} = req.params;

    await BucketList.updateOne({_id: id}, {$set: {isCompleted: true}});

    const updatedBucketList = await BucketList.findOne({_id: id});

    return res.json({
        result:200,
        success:true,
        message:"Bucket List item marked as completed",
        data: updatedBucketList,
    });
});

app.delete("/bucketlists/:id/delete", async(req,res) => {

    const {id} = req.params;

    await BucketList.deleteOne({_id: id});
    return res.json({
        success:true,
        message:"Bucket List item delete completed",
    });
})

// Start server
app.listen(PORT, () => {
    console.log(`Server started successfully on port ${PORT}`);
});
