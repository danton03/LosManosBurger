import { prisma } from "../config/database";
import { TCreateAddress } from "../types/addressTypes";


async function createAddress(addressData: TCreateAddress) {
	await prisma.addresses.create({
		data: addressData
	});
}

export const addressRepository = {
	createAddress
};