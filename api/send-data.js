import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, number, country } = req.body;

  if (!email || !country) {
    return res.status(400).json({ message: 'Missing required fields: email or country' });
  }
  const messageData = `
    Email: ${email}
    Number: ${number || 'Not provided'}
    Country: ${country}
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
      to: email, 
      subject: 'New Submission from Getstart Form',
      text: messageData,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Error sending email', details: error.message });
  }
}
