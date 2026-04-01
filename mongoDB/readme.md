## listDatabases()

# This method return alll the database from mongodb server


## Create Collection in MongoDB

# import { MongoClient } from "mongodb";

# const client = new MongoClient("mongodb+srv://piyushaglawe05:harshal@icp.tigfq.mongodb.net/")
# await client.connect()

# const db = client.db("todoApp")

# const todosCollection = db.collection('todos');
# const newCollection = db.collection('todosNew');

# const result1 = await todosCollection.insertOne({name:'Aman', age:15});
# const result2 = await newCollection.insertMany([
# {name:'Amani', age:18},
# {name:'Bhalla', age:16}
# ])

# console.log(result1, result2);
# client.close()


## delete Query 
# import { MongoClient, ObjectId } from "mongodb";

# const client = new MongoClient("mongodb+srv://piyushaglawe05:harshal@icp.tigfq.mongodb.net/")
# await client.connect()


# const db = client.db("todoApp")
# const todosCollection = db.collection('todos');

# const a = await todosCollection.deleteOne({
#    _id: new ObjectId("69cd1d631baf381a5d603428")
# });

# console.log(a);

# client.close()



// Delete One from object 
<!-- import { MongoClient, ObjectId } from "mongodb";

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


client.close() -->











