const { SendEmailCommand, Destination$, Body$ } = require('@aws-sdk/client-ses')
const sesClient = require('../config/aws');

async function sendEmail(to, subject, message,) {
  const params = {
    Source: process.env.SES_FROM_EMAIL,
    Destination: {
      ToAddresses: [to]
    },
    Message: {
      Subject: {
        Data: subject
      }
    },
    Body: {
      Text: {
        Data: message
      }
    }
  };
  const command = new SendEmailCommand(params);
  return await sesClient.send(command);
}
module.exports = sendEmail;