import { prisma } from "../config/database";
//eslint-disable prisma

async function getDeliveryLocations() {
	const districts = await prisma.cities.findMany({
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
  
	return districts;
}

export const deliveryRepository = {
	getDeliveryLocations
};