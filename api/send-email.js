const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  const { name, email,number,subject,reason, message } = req.body;

  if (!name || !email || !number || !subject || !reason || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, 
      to: 'ashishydv3066@gmail.com',
      subject: `New message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Number: ${number}
        Subject: ${subject}
        Reason: ${reason}
        Message: ${message}

      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');

    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
