import db from '../goals.js'; // Import the MySQL connection

// Get random goals
export async function getRandomGoals(req, res, next) {
  try {
    // Fetch all goals from the database
    const query = 'SELECT * FROM goals';
    const [results] = await db.query(query);

    // Shuffle and select 3 random goals
    const randomGoals = results.sort(() => 0.5 - Math.random()).slice(0, 3);

    res.status(200).json(randomGoals);
  } catch (err) {
    console.error('Error fetching random goals:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Pick a specific goal by ID
export async function pickGoal(req, res, next) {
  try {
    const id = parseInt(req.params.id, 10);

    const currentDate = new Date()

    // Fetch the goal by ID
    const query = 'SELECT * FROM goals WHERE id = ?';
    const [results] = await db.query(query, [id]);

    if (results.length > 0) {
      const goal = results[0];

      // Update the goal as "picked" (assuming there is a `picked` column in your database)
      const updateQuery = 'UPDATE goals SET picked = true, last_picked = ? WHERE id = ?';
      await db.query(updateQuery, [currentDate, id]);

      res.status(200).json({
        id: goal.id,
        goal: goal.goal, // The goal name/description
        description: goal.description, // The description of the goal
        picked: true, // Mark it as picked
        last_picked: goal.last_picked
      });
    } else {
      res.status(404).json({ error: 'Goal not found!' });
    }
  } catch (err) {
    console.error('Error picking goal:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}