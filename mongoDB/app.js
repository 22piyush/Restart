import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb+srv://piyushaglawe05:harshal@icp.tigfq.mongodb.net/")
await client.connect()


const db = client.db("todoApp")
const todosCollection = db.collection('todos');

await todosCollection.updateOne({ _id: new ObjectId('69cd21b7903b43bd22252cc5')},{
    $set: {name:"Raman"}
})


client.close()



