import express from 'express';
import { getRandomGoals, pickGoal, getPickedGoal, getGoalMessages, getGoalsHistory, collectGoal, resetGoals } from '../controllers/goalsController.js';
import cors from 'cors';

const router = express.Router();

// Manually handle preflight (OPTIONS) requests
router.options('*', cors());

// Route definitions
router.get('/', (req, res) => res.json('hi'));
router.get('/random-goals', cors(), getRandomGoals);
router.post('/pick-goal/:id', cors(), pickGoal);
router.get('/goals/:id/picked', cors(), getPickedGoal);
router.get('/goals/:id/messages', cors(), getGoalMessages);
router.get('/goals/history', cors(), getGoalsHistory);
router.post('/goals/:id/collect', cors(), collectGoal);
router.post('/goals/:id/collect', cors(), resetGoals);

export default router;