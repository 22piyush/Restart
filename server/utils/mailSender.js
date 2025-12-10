const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();   // Load .env variables

const mailSender = async (email, title, body) => {
  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
    // port: process.env.MAIL_PORT,
    // secure: false, // If port = 465 then true, otherwise false
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });

    // Send email
    const response = await transporter.sendMail({
      from: `"My App" <${process.env.MAIL_USER}>`,
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`
    });

    console.log("Email sent successfully:", response.messageId);
    return response;

  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};

module.exports = mailSender;
