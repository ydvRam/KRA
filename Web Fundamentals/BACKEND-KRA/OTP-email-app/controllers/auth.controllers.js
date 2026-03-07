const { sendOTP } = require('../services/otp.services');
async function sendOtpController(req, res) {
  const { email } = req.body
  if (!email) {
    return res.status(400).json({
      message: "Email is required"
    });
  }
  await sendOTP(email);
  res.json({
    message: "OTP sent successfully"
  });
}
module.exports = { sendOtpController }