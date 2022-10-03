import { prisma } from "../config/database";
//eslint-disable prisma

async function getDeliveryLocations() {
	const deliveryLocations = await prisma.cities.findMany({
		where: {},
		include: {
			Districts: {
				select: {
					id: true,
					name: true,
					Delivery: {
						select: {
							price: true
						}
					}
				},
			}
		}
	});
  
	return deliveryLocations;
}

async function getDeliveryLocationsAndUserAddresses(userId: number) {
	const deliveryLocations = await prisma.cities.findMany({
		where: {},
		include: {
			Districts: {
				select: {
					id: true,
					name: true,
					Delivery: {
						select: {
							price: true
						}
					}
				},
			},
		}
	});
  
	const userAddresses = await prisma.$queryRaw`
		SELECT addresses.id, addresses.street, addresses."houseNumber", districts.name AS district, cities.name AS city, states.name AS "state"
		FROM addresses
		JOIN districts
		ON districts.id = addresses."districtId"
		JOIN cities
		ON cities.id = districts."cityId"
		JOIN states
		ON states.id = cities."stateId"
		WHERE addresses."userId" = ${userId};
	`;

	const deliveryLocationsWithUserAddresses = {
		userAddresses,
		deliveryLocations
	};

	return deliveryLocationsWithUserAddresses;
}

export const deliveryRepository = {
	getDeliveryLocations,
	getDeliveryLocationsAndUserAddresses
};