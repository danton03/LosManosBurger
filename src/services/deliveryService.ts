import { deliveryRepository } from "../repositories/deliveryRepository";

async function getDeliveryLocations() {
	const deliveryLocations = await deliveryRepository.getDeliveryLocations();
	return deliveryLocations;
}

async function getDeliveryLocationsAndUserAddresses(userId: number) {
	const deliveryLocations = await deliveryRepository.getDeliveryLocationsAndUserAddresses(userId);
	return deliveryLocations;
}

export const deliveryService = {
	getDeliveryLocations,
	getDeliveryLocationsAndUserAddresses
};