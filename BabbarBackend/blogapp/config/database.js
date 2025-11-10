const mongoose = require("mongoose");
require("dotenv").config({ silent: true });

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("✅ DB Connection Successful");
  } catch (error) {
    console.error("❌ Issue in DB Connection");
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = dbConnect;
