import express from "express";
import dotenv from "dotenv";
import cors from "express";
import connectDB from "./config/db.js";
import { checkJWT } from "./middlewares/jwt.js";
import { getHome } from "./controllers/health.js";
import { postLogin, postSignUp } from "./controllers/auth.js";
import { getTours } from "./controllers/tours.js";
import { postTours } from "./controllers/tours.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 6000;


app.get("/", getHome);

// Auth Routes 
app.post("/signup", postSignUp);
app.post("/login", postLogin);

// Tour Routes 
app.get("/get_tours", getTours);
app.post("/create_tour", postTours);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

connectDB();
