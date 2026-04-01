import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb+srv://piyushaglawe05:harshal@icp.tigfq.mongodb.net/")
await client.connect()


const db = client.db("todoApp")
const collection = db.collection('todos');

console.log(collection);

client.close()



