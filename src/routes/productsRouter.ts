import { Router } from "express";
import { getProducts } from "../controllers/productsController";

const productsRouter = Router();

productsRouter.get("/products", getProducts);
productsRouter.get("/products/:id", getProducts);

export default productsRouter;