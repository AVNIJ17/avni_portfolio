const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    console.log("Received contact form:", { name, email, subject, message });

    const msg = {
      to: process.env.RECEIVER_EMAIL,
      from: "avnijain0598@gmail.com", // verified sender in SendGrid
      replyTo: email,
      subject: `Portfolio Contact Form: ${subject}`,
      html: `
        <h3>New Message from Portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/> ${message}</p>
      `,
    };

    await sgMail.send(msg);
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Server error. Try again later." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// // server.js
// const express = require("express");
// const nodemailer = require("nodemailer");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Root route (optional)
// app.get("/", (req, res) => {
//   res.send("Portfolio backend is running ✅");
// });

// // Contact form route
// app.post("/api/contact", async (req, res) => {
//   const { name, email, subject, message } = req.body;

//   // Validate form
//   if (!name || !email || !subject || !message) {
//     return res.status(400).json({ message: "All fields are required." });
//   }

//   try {
//     // Log what we received
//     console.log("Received contact form:", { name, email, subject, message });

//     // Create Nodemailer transporter using SendGrid
//     const transporter = nodemailer.createTransport({
//       service: "SendGrid",
//       auth: {
//         user: "apikey", // literally the string 'apikey'
//         pass: process.env.SENDGRID_API_KEY, // your SendGrid API key
//       },
//     });

//     // Mail options
//     const mailOptions = {
//       from: "avnijain0598@gmail.com",  // must be a verified sender in SendGrid
//       to: process.env.RECEIVER_EMAIL,   // your email where messages will arrive
//       replyTo: email,                   // the user's email from the form
//       subject: `Portfolio Contact Form: ${subject}`,
//       html: `
//         <h3>New Message from Portfolio</h3>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong><br/> ${message}</p>
//       `,
//     };

//     // Send the email
//     const info = await transporter.sendMail(mailOptions);
//     console.log("Email sent:", info.response);

//     res.status(200).json({ message: "Message sent successfully!" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).json({ message: "Server error. Try again later." });
//   }
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
