import { productsRepository } from "../repositories/productsRepository";
import { notFoundError } from "../utils/errorUtils";

async function getProducts() {
	const products = await productsRepository.getProducts();
	return products;
}

async function getProductById(productId: number) {
	if(isNaN(productId)){
		throw notFoundError("Invalid product id");
	}
	const product = await productsRepository.getById(productId);
	if(!product){
		throw notFoundError("Product not found");
	}
	return product;
}

export const productsService = {
	getProducts,
	getProductById
};