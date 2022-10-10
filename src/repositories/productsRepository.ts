import { prisma } from "../config/database";


async function getProducts() {
	const hamburgers = await prisma.products.findMany({
		where: {categoryId: 1}
	});
	const drinks = await prisma.products.findMany({
		where: {categoryId: 2}
	});
	const additional = await prisma.products.findMany({
		where: {categoryId: 3}
	});

	const products = {
		Hambúrgueres: hamburgers,
		Bebidas: drinks,
		Adicionais: additional
	};
	return products;
}

async function getById(id: number) {
	const products = await prisma.products.findMany({
		where: {id}
	});
	return products;
}

export const productsRepository = {
	getProducts, 
	getById
};