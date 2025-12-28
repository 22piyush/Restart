import { Schema, model } from "mongoose";

const bucketListSchema = new Schema({
    name: {type: String, require: true},
    description: {type: String},
    priority: {type: Number, default: 0}
});

const BucketList  = model("BucketList", bucketListSchema);
export default BucketList;