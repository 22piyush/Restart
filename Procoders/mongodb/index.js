const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
app.use(express.json());

// Your MongoDB URL
const mongoURL = "Add MOngo URL";  
const client = new MongoClient(mongoURL);

let db;

// Connect to MongoDB
async function connectDB() {
    try {
        await client.connect();
        console.log("MongoDB connected");

        db = client.db("school"); 

        // Create 
        // const studentCollection = db.collection("students");
        // const teacherCollection = db.collection("teacher");

        // const result1 = await studentCollection.insertOne({
        //     name: 'Piyush',
        //     age: 23
        // });

        // const result2 = await teacherCollection.insertMany([
        //     { name: 'Piyush', age: 23 },
        //     {name: 'bhau', age:23}
        // ]);

        // console.log(result1);
        // console.log(result2);
        
    
        // Read 
        // console.log(await db.listCollections().toArray());

        // const collection = db.collection("students");

        // const todosData = await collection.find({completed: false}).toArray();
        // console.log(todosData);


        // DELETE 
        // const studentCollection = db.collection("students");
        // studentCollection.drop();

        // DELETE ONE 
        // const teacherCollection = db.collection("teacher");
        // const a = await teacherCollection.deleteOne({_id:new ObjectId("69234d21776c10526627aed1")})
        
        // UPDATE ONE
        // const studentCollection = db.collection("students");
        // const a = await studentCollection.updateOne({_id: new ObjectId("add String")}, 
        //   {$set: {name:"Ok"}});


        // Delete Database 
        // db.dropDatabase();

    } catch (err) {
        console.error("Connection error:", err);
        process.exit(1);
    }
}

connectDB();


// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
