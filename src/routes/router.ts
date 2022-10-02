import { Router } from "express";
import authRouter from "./authRouter";
import deliveryRouter from "./deliveryRouter";
import productsRouter from "./productsRouter";

const router = Router();
router.use(authRouter);
router.use(productsRouter);
router.use(deliveryRouter);

export default router;
