import { Request, Response } from "express";
import { deliveryService } from "../services/deliveryService";

export async function getAllDeliveryLocations(req: Request, res: Response) {
	const deliveryLocations = await deliveryService.getDeliveryLocations();
	res.status(200).send(deliveryLocations);
}

export async function getDeliveryLocationsAndUserAddresses (req: Request, res: Response) {
	const { user } = res.locals;
	const deliveryLocations = await deliveryService.getDeliveryLocationsAndUserAddresses(user.id);
	res.status(200).send(deliveryLocations);
}

/* export async function get(req: Request, res: Response) {
  // TODO
} */