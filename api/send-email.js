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

  const messageData =  `
    Name: ${name}
    Email: ${email}
    Number: ${number || 'Not provided'}
    Addresss: ${subject || 'No Address'}
    Enquiry Type: ${reason || 'General inquiry'}
    Message: ${message}
    `;


  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to:'cashpnoreply@gmail.com',
      subject:reason,
      text: messageData,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Error sending email', details: error.message });
  }
}