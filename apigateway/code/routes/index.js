import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
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

const goalProxy = createProxyMiddleware({
  target: 'http://goals:3013',
  changeOrigin: true
})


router.use('/recipes', recipeProxy);
router.use('/articles', articleProxy)
router.use('/goals', goalProxy)

export default router;
