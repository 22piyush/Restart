const File = require("../models/File");
const cloudinary = require("cloudinary").v2;

exports.localFileUpload = async (req , res) => {

    try{

        const file = req.files.file;
        console.log("File AAGAI HAi ", file);

        let path = __dirname+ "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
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

};


function isFileTypeSupported(type, supportedTypes){
    return supportedTypes.includes(type);
}


async function uploadFileToCloudinary(file, folder) {
    const options = {folder}
    await cloudinary.uploader.upload(file.tempFilePath, options);
    
}


exports.imageUpload = async (req, res) =>{

    try{

        const {name, tags, email} = req.body;
        console.log(name, tags, email);

        const file = req.files.imageFile;
        console.log(file);

        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = file.name.split('.')[1].toLowerCase();

        if(!isFileTypeSupported(fileType, supportedTypes)){
            res.status(400).json({
                success:false,
                message:"File format not supported."
            })
        }

        const response = await uploadFileToCloudinary(file, "codehelp");
        

        
    }
    catch(error){

    }

}