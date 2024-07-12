
// backend/user/index.js
const express = require('express');
const userRouter = require("./user");
const accountRouter = require("./account");
const { authmiddleware } = require('../middleware');


const router = express.Router();

router.use("/user",authmiddleware);
router.use("/account", authmiddleware);

module.exports = router; 
