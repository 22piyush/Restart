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
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            },

        });

    }
    catch(error){

        console.log(error);
        

    }

});

const File = mongoose.model("File", fileSchema);
module.exports = File;