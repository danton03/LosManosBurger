import { prisma } from "../config/database";
//eslint-disable prisma

async function getDeliveryLocations() {
	const districts = await prisma.cities.findMany({
		where: {},
		include: {
			districts: {
				select: {
					id: true,
					name: true,
					shipping: {
						select: {
							price: true
						}
					}
				},
			}
		}
	});
  
	return districts;
}

export const deliveryRepository = {
	getDeliveryLocations
};