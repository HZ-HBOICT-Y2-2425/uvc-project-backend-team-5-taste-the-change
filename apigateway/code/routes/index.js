import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import cors from 'cors';
const router = express.Router();

// create a proxy for each microservice
const recipeProxy = createProxyMiddleware({
  target: 'http://recipes:3011',
  changeOrigin: true
});

const articleProxy = createProxyMiddleware({
  target: 'http://articles:3012',
  changeOrigin: true
})



router.use('/recipes', cors(), recipeProxy);
router.use('/articles', cors(), articleProxy)

export default router;
