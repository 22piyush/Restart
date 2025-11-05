const express = require("express");
const router = express.Router();


const {createTodo} = require("../controllers/createTodo")
const {getTodo} = require("../controllers/getTodo")
const {getOneTodo} = require("../controllers/getOneTodo")

router.post("/createTodo", createTodo)
router.get("/getTodo", getTodo)
router.get("/getOneTodo", getOneTodo)

module.exports = router;