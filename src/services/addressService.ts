import { addressRepository } from "../repositories/addressRepository";
import { TCreateAddress } from "../types/addressTypes";

async function createAddress(addressData: TCreateAddress) {
	const address = await addressRepository.createAddress(addressData);
	return address;
}

export const addressService = {
	createAddress
};