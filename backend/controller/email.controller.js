const { jsPDF } = require("jspdf");
const nodemailer = require("nodemailer");

// Generate PDF
const sendEmail = async (req, res) => {
  const { formData } = req.body;

  if (!formData || typeof formData !== "object") {
    return res
      .status(400)
      .json({ message: "Invalid form data", status: false });
  }

  if (!process.env.EMAIL || !process.env.PASSWORD) {
    return res
      .status(500)
      .json({ message: "Email configuration is missing", status: false });
  }

  const doc = new jsPDF();
  doc.setFontSize(16);
  doc.text("Form Data", 10, 10);

  let y = 20;
  for (const [key, value] of Object.entries(formData)) {
    doc.text(`${key}: ${value}`, 10, y);
    y += 10;
  }

  const pdfBuffer = Buffer.from(doc.output("arraybuffer"));

  // Set up Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: ["temiladeabdulbasit2002@gmail.com", "muritalaabimbola@gmail.com"],
    subject: "Form Data",
    text: "Please find the attached PDF.",
    attachments: [
      {
        filename: "form-data.pdf",
        content: pdfBuffer,
        contentType: "application/pdf",
      },
    ],
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);
    res.status(200).json({ message: "Email sent successfully!", status: true });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(400)
      .json({ message: "An error occurred sending the mail", status: false });
  }
};

module.exports = { sendEmail };
