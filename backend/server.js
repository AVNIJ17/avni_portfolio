// server.js
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON requests

// Root route (optional)
app.get("/", (req, res) => {
  res.send("Portfolio backend is running ✅");
});

// Contact form route
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validate form
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Log what we received
    console.log("Received contact form:", { name, email, subject, message });

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Gmail SMTP
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail email
        pass: process.env.EMAIL_PASS, // App password
      },
    });

    // Verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.error("SMTP Verification Error:", error);
      } else {
        console.log("SMTP Server is ready to take messages");
      }
    });

    // Mail options
    const mailOptions = {
      from: process.env.EMAIL_USER,  // Sender (your Gmail)
      to: process.env.EMAIL_USER,    // Recipient (your Gmail)
      replyTo: email,                // User's email from the form
      subject: `Portfolio Contact Form: ${subject}`,
      html: `
        <h3>New Message from Portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/> ${message}</p>
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);

    // Detailed error message (for debugging only)
    if (error.response) {
      console.error("SMTP Response:", error.response);
    }

    res.status(500).json({ message: "Server error. Try again later." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
