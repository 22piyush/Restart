const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config({ silent: true });


exports.signup = async (req,res) => {
    try{

        const {name, email, password, role} = req.body;

        const existingUser = await User.findOne({email});

        

    }
}