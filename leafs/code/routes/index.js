import express from 'express';
import { getLeafAmount } from '../controllers/leafController.js';
import cors from 'cors';

const router = express.Router();

// Manually handle preflight (OPTIONS) requests
router.options('*', cors());

// Route definitions
router.get('/', (req, res) => res.json('hi'));
router.get('/getLeafAmount', cors(), getLeafAmount);

export default router;
