import express from 'express';
import { getAllArticles, getArticleId } from '../controllers/articleController.js';
// import cors from 'cors';
const router = express.Router();


router.get('/', (req, res, next) => {
  res.json('hi');
});

router.get('/goals', getAllArticles);
router.get('/goals/:id', getArticleId)


export default router;
