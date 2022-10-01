import { Router } from 'express';
import authRouter from './authRouter';
import productsRouter from './productsRouter';

const router = Router();
router.use(authRouter);
router.use(productsRouter);

export default router;
