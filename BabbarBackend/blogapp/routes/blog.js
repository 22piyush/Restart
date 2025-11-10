const express = require("express");
const router = express.Router();

// Import Controller 
const {dummLink} = require("../controllers/LikeController");





//Mapping Create
router.get("/dummroute", dummLink);




// export
module.exports = router;