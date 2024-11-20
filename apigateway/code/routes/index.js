import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
const router = express.Router();

// create a proxy for each microservice
const microserviceProxy = createProxyMiddleware({
  target: 'http://recipes:3011',
  changeOrigin: true
});

router.use('/recipes', microserviceProxy);

export default router;
