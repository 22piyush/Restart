const express = require("express");
const router = express.Router();


const {createTodo} = require("../controllers/createTodo")
const {getTodo} = require("../controllers/getTodo")
const {getOneTodo} = require("../controllers/getOneTodo")
const {updateTodo} = require("../controllers/updateTodo")
const {deleteTodo} = require("../controllers/deleteTodo")

router.post("/createTodo", createTodo)
router.get("/getTodo", getTodo)
router.post("/getOneTodo", getOneTodo)
router.post("/updateTodo", updateTodo)
router.post("/deleteTodo", deleteTodo)

module.exports = router;