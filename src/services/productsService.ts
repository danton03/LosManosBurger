async function getProducts() {
  const products = await productsRepository.getProducts();
  return products;
}

export const productsService = {
  getProducts
}