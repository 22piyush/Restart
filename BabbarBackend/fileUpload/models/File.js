const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
    },
    videoUrl: {         
        type: String
    },
    tags:{
        type:String,
    },
    email:{
        type:String
    }

});



fileSchema.post("save", async function(doc) {

    try{

        let transporter = nodemailer.transporter({
            host: process.env.MAIL_HOST
        })

    }
    catch(error){



    }

});

const File = mongoose.model("File", fileSchema);
module.exports = File;