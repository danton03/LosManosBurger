import { Router } from "express";
import { 
	getAllDeliveryLocations, 
	getDeliveryLocationsAndUserAddresses 
} from "../controllers/deliveryController";
import { ensureAuthenticatedMiddleware } from "../middlewares/authMiddleware";

const deliveryRouter = Router();

deliveryRouter.get("/delivery", getAllDeliveryLocations);
deliveryRouter.use(ensureAuthenticatedMiddleware);
deliveryRouter.get("/delivery/clients", getDeliveryLocationsAndUserAddresses);

export default deliveryRouter;