import { Router } from "express";
import { getProducts } from "../controllers/productsController";

const deliveryRouter = Router();

deliveryRouter.get("/delivery", getProducts);

export default deliveryRouter;