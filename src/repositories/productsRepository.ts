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
	const products = await prisma.$queryRaw`
		SELECT product.id, product.name, product.description, product."imageUrl", product.price, category.name AS category
		FROM products product
		JOIN categories category
		ON category.id = "categoryId"
		WHERE product.id = ${id}
	`;
	return products[0];
}

export const productsRepository = {
	getProducts, 
	getById
};