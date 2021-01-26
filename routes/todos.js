const express = require("express");
const { getTodos } = require("../controllers/todos");

const router = express.Router();

router.get("/", getTodos);
