import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb+srv://piyushaglawe05:harshal@icp.tigfq.mongodb.net/")
await client.connect()


const db = client.db("todoApp")
const todosCollection = db.collection('todos');
const newCollection = db.collection('todosNew');


const result1 = await todosCollection.insertOne({name:'Aman', age:15});
const result2 = await newCollection.insertMany([
    {name:'Amani', age:18},
    {name:'Bhalla', age:16}
])

console.log(result1, result2);


client.close()



