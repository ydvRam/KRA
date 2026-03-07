const generateOTP = require('../utils/generateOtp');
const sendEmail = require('./email.services');

const otpStore = {};

async function sendOTP(email) {
  const otp = generateOTP();
  otpStore[email] = otp;
  const message = `Your OTP is ${otp}`;
  await sendEmail(email, "Your OTP code ", message);
  return otp;
}
module.exports = { sendOTP };