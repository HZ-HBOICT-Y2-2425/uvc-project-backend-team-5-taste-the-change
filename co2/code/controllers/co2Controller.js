import db from '../co2.js'; // Import the MySQL connection

export async function getCo2Saved(req, res, next) {
  try {
    // Fetch the leafAmount from the database
    const query = 'SELECT * FROM co2Saved';
    const [results] = await db.query(query);

    // Return the fetched leafAmount
    res.status(200).json(results);
  } catch (err) {
    console.error('Error fetching leafAmount:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


export async function updateCo2Saved(req, res) {
  const { amount } = req.body;

  if (!amount || typeof amount !== 'number' || amount <= 0) {
    return res.status(400).json({ error: 'Invalid amount' });
  }

  try {
    await db.query('UPDATE co2Saved SET co2Saved = co2Saved + ?', [amount]);
    res.status(200).json({ message: 'CO2 saved updated successfully' });
  } catch (err) {
    console.error('Error updating CO₂ saved:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
