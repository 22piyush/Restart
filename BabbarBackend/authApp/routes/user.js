const express = require("express");
const router = express.Router();

const {login, signup} = require("../controllers/Auth");
const {auth, isStudent, isAdmin} = require("../middlewares/auth");

router.post("/login", login);
router.post("/signup", signup);

// Protected Route 
router.post("/student", auth, isStudent, (req,res) => {
    res.json({
        success: true,
        message:"Welcome to the protected route students"
    });
});

module.exports = router;