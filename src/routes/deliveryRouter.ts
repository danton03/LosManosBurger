import { Router } from "express";
import { getAllDeliveryLocations } from "../controllers/deliveryController";

const deliveryRouter = Router();

deliveryRouter.get("/delivery", getAllDeliveryLocations);

export default deliveryRouter;