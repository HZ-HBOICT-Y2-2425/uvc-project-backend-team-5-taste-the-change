import express from 'express';
import { checkGoalStatus, getRandomGoals, pickGoal } from '../controllers/goalsController.js';
import cors from 'cors';

const router = express.Router();

// Manually handle preflight (OPTIONS) requests
router.options('*', cors());

// Route definitions
router.get('/', (req, res) => res.json('hi'));
router.get('/random-goals', cors(), getRandomGoals);
router.post('/pick-goal/:id', cors(), pickGoal);

export default router;
