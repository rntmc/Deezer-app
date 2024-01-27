import axios from 'axios';

export async function handler(req, res) {
  try {
    const response = await axios.get('https://api.deezer.com/chart');
    const data = await response.data;
    console.log(data)
    res.status(200).json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}