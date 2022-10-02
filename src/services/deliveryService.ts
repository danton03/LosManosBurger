import { deliveryRepository } from "../repositories/deliveryRepository";

async function getDeliveryLocations() {
	const deliveryLocations = await deliveryRepository.getDeliveryLocations();
	return deliveryLocations;
}

export const deliveryService = {
	getDeliveryLocations
};