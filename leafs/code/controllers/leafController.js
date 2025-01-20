import db from '../leaf.js'; // Import the MySQL connection

export async function getLeafAmount(req, res, next) {
  try {
    // Fetch the leafAmount from the database
    const query = 'SELECT * FROM leafAmount';
    const [results] = await db.query(query);

    // Return the fetched leafAmount
    res.status(200).json(results);
  } catch (err) {
    console.error('Error fetching leafAmount:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}