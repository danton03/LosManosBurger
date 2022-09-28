import { Router } from 'express';
import { ensureAuthenticatedMiddleware } from '../middlewares/authMiddleware';
import authRouter from './authRouter';

const router = Router();
router.use(authRouter);
router.use(ensureAuthenticatedMiddleware);

export default router;
