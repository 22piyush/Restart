const Category = require("../models/Category");


// create Tag Handler function
exports.createCategory = async (req, res) => {
    try {
        // fetch data
        const { name, desciption } = req.body;

        // validation
        if (!name || !desciption) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        // create entry in db
        const tagDetails = await Tag.create({
            name: name,
            description: desciption,
        });
        console.log(tagDetails);

        // retrun response
        return res.status(200).json({
            success: true,
            message: "Tag Created Successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

//Get All Tags
exports.showAllcategory = async (req, res) => {
    try {
        const allTags = await Tag.find({}, { name: true, description: true });
        res.status(200).json({
            success: true,
            message: "All tags returned successfully",
            allTags,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


// category page details 
exports.categoryPageDetails = async (req, res) => {
    try {
        // get category id 
        const { categoryId } = req.body;
        // get courses for specified categoryId
        const selectedCategory = await Category.findById(category)
            .populate("courses")
            .exec();

        // validation
        if (!selectedCategory) {
            return res.status(404).json({
                success: false,
                message: "Data not found"
            });
        }

        // get courses for different categories 
        const differentCategories = await Category.find({
            _id: { $ne: categoryId },
        })
        .populate("courses")
        .exec();


        // get top selling courses 
        // HW - Write it on your own 

        // return response 
        return res.status(200).json({
            success: true,
            data:{
                selectedCategory,
                differentCategories,
            }
        })

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}



