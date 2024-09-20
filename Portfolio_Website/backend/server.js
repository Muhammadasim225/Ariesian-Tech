const express = require("express");
const nodemailer = require("nodemailer");
const dotenv=require('dotenv').config();
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST route to handle form submissions
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Configure nodemailer to use Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail", // Correct service field
    host:"smtp.gmail.com",
    port:465,
    secure: true, // Use SSL

    auth: {
      user: "", // Your Gmail email address
      pass: "", 
    },
  });

  // Mail options
  const mailOptions = {
    from: email,
    to: "your-gmail-email@gmail.com", // Where you want to receive the emails
    subject: `New message from ${name}`,
    text: `You have a new message from:
           Name: ${name}
           Email: ${email}
           Message: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send("Failed to send email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});