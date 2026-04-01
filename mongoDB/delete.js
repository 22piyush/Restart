// delete Object 

import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb+srv://piyushaglawe05:harshal@icp.tigfq.mongodb.net/")
await client.connect()


const db = client.db("todoApp")
const todosCollection = db.collection('todos');

const a = await todosCollection.deleteOne({
    _id: new ObjectId("69cd1d631baf381a5d603428")
});

console.log(a);


client.close()




// Delete One from object 
import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb+srv://piyushaglawe05:harshal@icp.tigfq.mongodb.net/")
await client.connect()


const db = client.db("todoApp")
const todosCollection = db.collection('todos');

const a = await todosCollection.updateOne(
    {
        _id: new ObjectId("69cd1d631baf381a5d603428")
    }, {
      $unset: { age: "" } 
    }
)

console.log(a);


client.close()



