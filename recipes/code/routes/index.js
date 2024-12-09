import express from 'express';
import { getAllRecipes } from '../controllers/recipeController.js';
import cors from 'cors';
const router = express.Router();


router.get('/', (req, res, next) => {
  res.json('hi');
});

router.get('/recipes', cors(), getAllRecipes);
// router.get('/recipes/:id', cors(), getRecipeId)


export default router;
