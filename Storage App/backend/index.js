const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/authRoutes")

dotenv.config();
// DB connection
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

app.use("/api", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
