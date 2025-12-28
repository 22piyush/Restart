import { mongoose } from "mongoose";

const connectDB = async () => {
   try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        if(conn){
            console.log("Connected to MongoDB");
        }
   }
   catch(errr){
      console.error("Error connecting to mongodb");
   }
};

export default connectDB;

