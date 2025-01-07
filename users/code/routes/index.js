import express from 'express';
import { getUsers } from '../controllers/usersController.js';
import cors from 'cors';

const router = express.Router();

// Manually handle preflight (OPTIONS) requests
router.options('*', cors());

// Route definitions
router.get('/', (req, res) => res.json('hi'));
router.get('/all-users', cors(), getUsers);
//router.get('/user', cors(), checkAvailability);

export default router;
