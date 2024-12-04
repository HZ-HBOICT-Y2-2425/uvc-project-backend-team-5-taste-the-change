import express from 'express';
import { getAllRecipes, getRecipeId } from '../controllers/recipeController.js';
// import cors from 'cors';
const router = express.Router();


router.get('/', (req, res, next) => {
  res.json('hi');
});

router.get('/recipes', getAllRecipes);
router.get('/recipes/:id', getRecipeId)


export default router;
