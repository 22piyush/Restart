const express = require("express");
const router = express.Router();

// Import Controller 
const {dummyLink} = require("../controllers/LikeController");





//Mapping Create
router.get("/dummyroute", dummyLink);




// export
module.exports = router;