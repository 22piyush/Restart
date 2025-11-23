const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

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

        // Shift This Connfiguration Config File 
        let transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                // pass:process.env.MAIL_PASS,
            },

        });

        let info = await transporter.sendMail({
            from:`Piyush`,
            to:doc.email,
            subject:"New File Uploaded",
            html:`<h2>Hello jee</h2> <p>File Uploaded</p>`
        });

        console.log(info);
    }
    catch(error){
        console.error(error);
    }

});

const File = mongoose.model("File", fileSchema);
module.exports = File;