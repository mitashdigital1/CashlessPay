export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Example alert message
      return res.status(200).json({ message: 'Alert triggered successfully!' });
    } else {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  }  