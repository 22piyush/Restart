const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    mobile:{
        type:String,
        unique:true,
        required: true,
        match: [/^[0-9]{10}$/, "Please enter a valid mobile number"]
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user"
    }
},
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);