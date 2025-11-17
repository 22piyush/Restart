const File = require("../models/File");


exports.localFileUpload = async (req , res) => {

    try{

        const file = req.files.file;
        console.log("File AAGAI HAi ", file);

        let path = __dirname+ "/files/" + Date.now();
        console.log(path, "<--Path");
        

        file.mv(path, (err) => {
            console.log(err);
        });

        res.json({
            success:true,
            message:"Local File uploaded successfully."
        })
        

    }
    catch(error){
        console.log(error);
        
    }

}