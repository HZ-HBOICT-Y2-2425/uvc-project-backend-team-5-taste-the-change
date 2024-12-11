import express from 'express';
import { getAllArticles } from '../controllers/articleController.js';
// import cors from 'cors';
const router = express.Router();


router.get('/', (req, res, next) => {
  res.json('hi');
});

router.get('/articles', getAllArticles);
// router.get('/articles/:id', getArticleId)


export default router;
