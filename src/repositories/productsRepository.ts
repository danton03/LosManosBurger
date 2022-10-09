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
		hamburgers: hamburgers,
		drinks,
		additional
	};
	return products;
}
	return products;
}

export const productsRepository = {
	getProducts
};