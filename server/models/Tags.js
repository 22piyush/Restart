const mongoose = require("mongoose");

const tagsSchema = new mongoose.Schema({

    name:{
        type
    }


});

module.exports = mongoose.model("Tags", tagsSchema);
