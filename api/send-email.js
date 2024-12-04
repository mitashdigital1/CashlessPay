import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, number, subject, reason, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const messageData = `
    Name: ${name}
    Email: ${email}
    Number: ${number || 'Not provided'}
    Subject: ${subject || 'No subject'}
    Reason: ${reason || 'No reason'}
    Message: ${message}
  `;

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 587, // Zoho SMTP uses port 465 for SSL
      secure: true, // True for SSL
      auth: {
        user: process.env.EMAIL_USER, // Your Zoho email address
        pass: process.env.EMAIL_PASS, // Your Zoho email password or app password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: subject || 'New Contact Form Submission',
      text: messageData,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Error sending email', details: error.message });
  }
}