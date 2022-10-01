import { prisma } from "../config/database";


async function getProducts() {
	const products = await prisma.$queryRaw`
    SELECT products.id, products.name, products.description,  products."imageUrl", category.name as category, price 
    FROM products
    JOIN categories category
    ON "categoryId" = category.id
    ORDER BY category.id
  `;
	return products;
}

export const productsRepository = {
	getProducts
};