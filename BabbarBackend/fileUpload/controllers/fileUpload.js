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


// Check file type
function isFileTypeSupported(type, supportedTypes) {
    return supportedTypes.includes(type);
}

// Upload to Cloudinary
async function uploadFileToCloudinary(file, folder, quality) {
    let options = {
        folder: folder,
        resource_type: "auto"   // detects image/video/pdf automatically
    };

    // If quality is provided → compress image
    if (quality) {
        options.quality = quality;     // reduce quality
        options.width = 300;           // reduce image width
        options.crop = "scale";        // scale image properly
    }

    return await cloudinary.uploader.upload(file.tempFilePath, options);
}


exports.imageUpload = async (req, res) => {
    try {
        const { name, tags, email } = req.body;
        console.log(name, tags, email);

        const file = req.files.imageFile;
        console.log(file);

        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = file.name.split(".").pop().toLowerCase();

        // If file type not supported → stop API
        if (!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success: false,
                message: "File format not supported.",
            });
        }

        // Upload to Cloudinary
        const response = await uploadFileToCloudinary(file, "codehelp");
        console.log("Cloudinary Response:", response);

        // Save in DB
        const fileData = await File.create({
            name,
            email,
            tags,
            imageUrl: response.secure_url,
        });

        return res.json({
            success: true,
            message: "Image uploaded successfully!",
            fileData: fileData,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
};



exports.videoUpload = async (req,res) => {
    try{

        const { name, tags, email } = req.body;
        console.log(name, tags, email);

        const file = req.files.videoFile;

        const supportedTypes = ["mp4", "mov"];
        const fileType = file.name.split(".").pop().toLowerCase();

        // If file type not supported → stop API
        if (!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success: false,
                message: "File format not supported.",
            });
        }

        // Upload to Cloudinary
        const response = await cloudinary.uploader.upload(file.tempFilePath, {
            folder: "codehelp",
            resource_type: "video"
        });
        console.log("Cloudinary Response:", response);

        // Save in DB
        const fileData = await File.create({
            name,
            email,
            tags,
            videoUrl: response.secure_url,
        });

        return res.json({
            success: true,
            message: "Video uploaded successfully!",
            fileData: fileData,
        });

    }
    catch(error){
        console.log(error);
        res.status(400).json({
            success:false,
            message:"Something went wrong"
        })
    }
}


exports.imageSizeReducer = async (req, res) => {
    try {
        const { name, tags, email } = req.body;

        const file = req.files.imageFile;
        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = file.name.split(".").pop().toLowerCase();

        if (!supportedTypes.includes(fileType)) {
            return res.status(400).json({
                success: false,
                message: "File format not supported.",
            });
        }

        // Reduce image size by 30% (quality = 30)
        const response = await uploadFileToCloudinary(file, "codehelp", 30);

        const fileData = await File.create({
            name,
            email,
            tags,
            imageUrl: response.secure_url
        });

        return res.json({
            success: true,
            message: "Image uploaded + compressed successfully!",
            fileData
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
};

