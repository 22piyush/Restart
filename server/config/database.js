const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // Load .env variables

const uri = process.env.MONGO_URL;

if (!uri) {
  throw new Error("MONGO_URL is not defined in .env");
}

async function connectDB() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅MongoDB connected successfully!");

    return mongoose.connection; // return DB connection
  } catch (err) {
    console.error("❌MongoDB connection error:", err);
    process.exit(1); // Exit on failure
  }
}

module.exports = connectDB;
