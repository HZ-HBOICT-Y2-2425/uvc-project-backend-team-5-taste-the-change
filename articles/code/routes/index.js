import express from 'express';
<<<<<<< HEAD
import { getAllArticles } from '../controllers/articleController.js';
// import cors from 'cors';
=======
import { getAllArticles, getArticleId } from '../controllers/articleController.js';
import cors from 'cors';
>>>>>>> development
const router = express.Router();


router.get('/', (req, res, next) => {
  res.json('hi');
});

<<<<<<< HEAD
router.get('/articles', getAllArticles);
// router.get('/articles/:id', getArticleId)
=======
router.get('/articles', cors(), getAllArticles);
router.get('/articles/:id', cors(), getArticleId);
>>>>>>> development


export default router;
