import express from 'express';
import { json } from 'body-parser';
import { createTransport } from 'nodemailer';
import cors from 'cors';

const app = express();
const PORT = 8080;

// Middleware to parse JSON and handle CORS
app.use(json());
app.use(cors());

// Configure Nodemailer
const transporter = createTransport({
    service: 'gmail',
    auth: {
        user:'aarondev.mitash@gmail.com', // Use environment variables for security
        pass:'czwusjxehxlchnap', // Use environment variables for security
    },
});

// Health Check Route
app.get('/health', (req, res) => {
    res.status(200).send('Server is running');
});

// API route to handle email sending
app.post('/api/send-email', async (req, res) => {
    const { name, email, number, subject, reason, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const mailOptions = {
        from:'aarondev.mitash@gmail.com',
        to: 'sourabhediter@gmail.com',
        subject: `New message from ${name}`,
        text: `
            Name: ${name}
            Email: ${email}
            Number: ${number || 'Not provided'}
            Subject: ${subject || 'No subject'}
            Reason: ${reason || 'No reason'}
            Message: ${message}
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully!');
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email' });
    }
});

// Start the server and handle errors
const startServer = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error('Error starting the server:', err.message);
        process.exit(1); // Exit the process on failure
    }
};

startServer();