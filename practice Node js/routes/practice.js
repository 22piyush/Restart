const express = require("express");
const router = express.Router();

const {create} = require("../controllers/create")
const {del} = require("../controllers/delete")

router.post('/create', create)
router.post('/delete', del)


module.exports = router;
