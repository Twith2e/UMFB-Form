const express = require("express");
const { sendEmail } = require("../controller/email.controller");
const router = express.Router();

router.post("/send-email", sendEmail);

module.exports = router;
