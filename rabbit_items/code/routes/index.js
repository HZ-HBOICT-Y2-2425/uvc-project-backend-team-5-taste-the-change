import express from 'express';
import { getAllItems, getItemsId, unlockItem } from '../controllers/itemsController.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json('Welcome to the Rabbit Items API!');
});

// Get all items with unlock status based on user leaves
router.get('/items', getAllItems);

// Get a specific item by ID
router.get('/items/:id', getItemsId);

// Unlock an item
router.post('/items/:id/unlock', unlockItem);

export default router;
