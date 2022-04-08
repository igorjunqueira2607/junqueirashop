export async function getCategories() {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/categories`;
  const response = await fetch (endpoint);
  const responseJSON = await response.json();
  return responseJSON;
};

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch (endpoint);
  const responseJSON = await response.json();
  return responseJSON;
};

export async function getItensFromCategory(categoryId) {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  const response = await fetch (endpoint);
  const responseJSON = await response.json();
  return responseJSON;
};

export async function getDetails(productId) {
  const endpoint = `https://api.mercadolibre.com/items/${productId}`;
  const response = await fetch (endpoint);
  const responseJSON = await response.json();
  return responseJSON;
};

export async function getItensFromQuery(query) {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const response = await fetch (endpoint);
  const responseJSON = await response.json();
  return responseJSON;
};