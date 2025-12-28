import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import BucketList from "./models/BucketList";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

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

    const {name , description , priority} = req.body

    const newBucketList = new BucketList({
        name,
        description,
        priority
    });

    const savedBucketList = await newBucketList.save();

    return res.json({
        success:true,
        data:savedBucketList,
        message:"Bucket List created successfully"
    })

});

// Start server
app.listen(PORT, () => {
    console.log(`Server started successfully on port ${PORT}`);
});
