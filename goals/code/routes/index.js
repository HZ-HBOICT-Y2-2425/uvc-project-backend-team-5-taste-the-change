import express from 'express';
import { getRandomGoals, pickGoal } from '../controllers/goalsController.js';
import cors from 'cors';
const router = express.Router();


router.get('/', (req, res, next) => {
  res.json('hi');
});

router.get('/random-goals', cors(), getRandomGoals);
router.post('/pick-goal/:id', cors(), pickGoal);

 
export default router;
