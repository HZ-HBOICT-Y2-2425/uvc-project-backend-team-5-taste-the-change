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
export async function pickGoal(req, res) {
  try {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid goal ID.' });
    }

    const currentDate = new Date();

    // Update goal status to "picked" if no other goal is picked
    const query = `
      UPDATE goals
      SET status = 'picked', last_picked = ?
      WHERE id = ? AND status = 'not_picked';
    `;
    const [result] = await db.query(query, [currentDate, id]);

    if (result.affectedRows === 0) {
      return res.status(400).json({
        error: 'Goal not found, already picked, or another goal is already picked.',
      });
    }

    // Fetch the updated goal
    const [updatedGoal] = await db.query('SELECT * FROM goals WHERE id = ?', [id]);

    res.status(200).json(updatedGoal[0]);
  } catch (error) {
    console.error('Error picking goal:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


export async function getPickedGoal(req, res) {
  try {
    const goalId = parseInt(req.params.id, 10);

    if (isNaN(goalId)) {
      return res.status(400).json({ error: 'Invalid goal ID.' });
    }

    const query = `
      SELECT id, goal, description, status
      FROM goals
      WHERE id = ? AND status = 'picked';
    `;
    const [results] = await db.query(query, [goalId]);

    if (results.length === 0) {
      return res.status(404).json({ error: 'No picked goal found for this ID.' });
    }

    res.status(200).json(results[0]);
  } catch (error) {
    console.error('Error fetching picked goal:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function resetGoals(req, res) {
  try {
    const query = 'UPDATE goals SET status = "not_picked", last_picked = NULL WHERE status = "picked";';
    await db.query(query);
    res.status(200).json({ message: 'All goals reset successfully.' });
  } catch (error) {
    console.error('Error resetting goals:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


export async function getGoalMessages(req, res) {
  try {
    const goalId = parseInt(req.params.id, 10);

    if (isNaN(goalId)) {
      return res.status(400).json({ error: 'Invalid goal ID.' });
    }

    // Fetch messages for the given goal ID
    const query = `
      SELECT message 
      FROM messages 
      WHERE goal_id = ?`;
    const [messages] = await db.query(query, [goalId]);

    if (messages.length === 0) {
      return res.status(404).json({ error: 'No messages found for this goal.' });
    }

    res.status(200).json({ messages: messages.map((m) => m.message) });
  } catch (err) {
    console.error('Error fetching goal messages:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export async function collectGoal(req, res) {
  try {
      console.log('Received Goal ID:', req.params.id); // Debug log
      const goalId = parseInt(req.params.id, 10);

      if (isNaN(goalId)) {
          console.error('Invalid goal ID');
          return res.status(400).json({ error: 'Invalid goal ID.' });
      }

      const query = 'UPDATE goals SET status = "collected" WHERE id = ?';
      const [result] = await db.query(query, [goalId]);
      console.log('DB Update Result:', result); // Debug log

      if (result.affectedRows === 0) {
          console.error('Goal not found or already collected');
          return res.status(404).json({ error: 'Goal not found or already collected.' });
      }

      res.status(200).json({ message: 'Goal collected successfully.', goalId });
  } catch (error) {
      console.error('Error collecting goal:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
}



export async function getGoalsHistory(req, res) {
  try {
      const query = `
          SELECT id, goal, description, last_picked
          FROM goals
          WHERE status = "collected"
          ORDER BY last_picked DESC;
      `;
      const [results] = await db.query(query);
      res.status(200).json(results);
  } catch (error) {
      console.error('Error fetching goal history:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
}