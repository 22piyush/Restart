const mongoose = require("mongoose");
require("dotenv").config({ quiet: true });

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("✅ Database Connection Successful"))
    .catch((error) => {
        console.log("❌ Database Connection Failed");
        console.error(error.message);
        process.exit(1);
    });
};

module.exports = dbConnect;
