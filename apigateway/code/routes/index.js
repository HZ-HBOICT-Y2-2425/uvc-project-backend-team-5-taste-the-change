import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import cors from 'cors';

const router = express.Router();

// create a proxy for each microservice
const recipeProxy = createProxyMiddleware({
  target: 'http://recipes:3012',
  changeOrigin: true
});

const articleProxy = createProxyMiddleware({
  target: 'http://articles:3011',
  changeOrigin: true
})

const goalProxy = createProxyMiddleware({
  target: 'http://goals:3013',
  changeOrigin: true
})

const leafProxy = createProxyMiddleware({
  target: 'http://leafs:3014',
  changeOrigin: true
})

const userProxy = createProxyMiddleware({
  target: 'http://users:3015',
  changeOrigin: true
})



router.use('/recipes', cors(), recipeProxy);
router.use('/articles', cors(), articleProxy);
router.use('/goals', cors(), goalProxy);
router.use('/leafs', cors(), leafProxy);
router.use('/users', cors(), userProxy);

export default router;
