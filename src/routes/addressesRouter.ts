import { Router } from "express";
import { createAddress } from "../controllers/addressController";
import { ensureAuthenticatedMiddleware } from "../middlewares/authMiddleware";

const addressRouter = Router();

addressRouter.use(ensureAuthenticatedMiddleware);
addressRouter.post("/addresses", createAddress);

export default addressRouter;