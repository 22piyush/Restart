const express = require("express");
const router = express.Router();


const {createTodo} = require("../controllers/createTodo")
const {getTodo} = require("../controllers/getTodo")
const {getOneTodo} = require("../controllers/getOneTodo")
const {updateTodo} = require("../controllers/updateTodo")

router.post("/createTodo", createTodo)
router.get("/getTodo", getTodo)
router.post("/getOneTodo", getOneTodo)
router.post("/updateTodo", updateTodo)

module.exports = router;