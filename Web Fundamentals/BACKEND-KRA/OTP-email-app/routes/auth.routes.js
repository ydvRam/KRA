const express = require('express');
const router = express.Router();
const { sendOtpController } = require('../controllers/auth.controllers')

router.post('/send-otp', sendOtpController);
module.exports = router;