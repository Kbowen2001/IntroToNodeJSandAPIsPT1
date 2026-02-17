const express = require("express");
const { awesomeFunction } = require("../controllers");

const router = express.Router();

router.get("/", awesomeFunction);

module.exports = router;
