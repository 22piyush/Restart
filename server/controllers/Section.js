const Section = require("../models/Section");
const Course = require("../models/Course");

exports.createSection = async (req, res) => {
    try {

        // data fetch 
        const { sectionName, courseId } = req.body;
        // data validation 
        if (!sectionName || !courseId) {
            return res.status(400).json({
                success: false,
                message: "Mossing Properties"
            });
        }
        // create section 
        const newSection = await Section.create({ sectionName });
        // update course with section ObjectID 
        const updatedCourseDetails = await Course.findByIdAndUpdate(
            courseId,
            {
                $push: {
                    courseContent: newSection._id,
                }
            },
            { new: true },
        );

        // return response 

    }
    catch (error) {

    }
}