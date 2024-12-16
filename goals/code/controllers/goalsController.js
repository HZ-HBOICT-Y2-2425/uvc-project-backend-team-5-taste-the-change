
import { readFile } from 'fs/promises';

let data;

(async () => {
  data = JSON.parse(
    await readFile(
      new URL('./goals.json', import.meta.url)
    )
  );
})();

export async function getRandomGoals(req, res, next) {
  try {
    const goals = data.goals;
    const allGoals = [...goals.beginner, ...goals.intermediate, ...goals.advanced];
    const randomGoals = allGoals.sort(() => 0.5 - Math.random()).slice(0, 3);

    //set header before response
    res.status(200).json(randomGoals);
  } catch (err) {
    next(err);
  }
}

export async function pickGoal(req, res, next) {
  try {
    const id = parseInt(req.params.id, 10);
    const goals = data.goals;
    const goal = goals.beginner.find(g => g.id === id) || goals.intermediate.find(g => g.id === id) || goals.advanced.find(g => g.id === id);

    if (goal) {
      goal.picked = false; // Assuming you need to update this in the actual database or JSON file
      res.status(200).json({ message: 'Goal picked!' });
    } else {
      res.status(404).json({ error: 'Goal not found!' });
    }
  } catch (err) {
    next(err);
  }
}
