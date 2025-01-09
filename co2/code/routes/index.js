import express from 'express';
import { getCo2Saved, updateCo2Saved } from '../controllers/co2Controller.js';
import cors from 'cors';

const router = express.Router();

// Manually handle preflight (OPTIONS) requests
router.options('*', cors());

// Route definitions
router.get('/', (req, res) => res.json('hi'));
router.get('/getCo2Saved', cors(), getCo2Saved);
router.post('/updateCo2Saved', cors(), updateCo2Saved)

export default router;
