const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

// CONFIGURE YOUR EMAIL
const gmailEmail = "imamikenny27@gmail.com";
const gmailPassword = "mqbn ctzt ydgz dcvz";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.sendContactEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const { name, email, message } = req.body;

    const mailOptions = {
      from: email,
      to: gmailEmail,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Email Error:", error);
        return res.status(500).send("Error sending email.");
      }
      return res.status(200).send("Message sent successfully!");
    });
  });
});
