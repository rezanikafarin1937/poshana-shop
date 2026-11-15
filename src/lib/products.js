export const BASE_PATH = "";
const PRODUCTS_URL = `${BASE_PATH}/database/products.json`;
const USAGES_URL = `${BASE_PATH}/database/usage.json`;
export async function fetchProducts() {
  const response = await fetch(PRODUCTS_URL);

  if (!response.ok) {
    throw new Error("خطا در دریافت محصولات");
  }

  const result = await response.json();

  return result.products || result;
}

export async function fetchUsages() {
  const response = await fetch(USAGES_URL);

  if (!response.ok) {
    throw new Error("خطا در دریافت کاربردها");
  }

  const result = await response.json();

  return result.usage || result;
}

export function filterProducts(
  products,
  { title = "", cat = "", usage = "", page = 1, perPage = 10 } = {},
) {
  let result = [...products];

  if (title) {
    result = result.filter((item) =>
      item.title.toLowerCase().includes(title.toLowerCase()),
    );
  }

  if (cat) {
    result = result.filter((item) => item.cat === cat);
  }

  if (usage) {
    result = result.filter((item) => item.usage === usage);
  }

  const totalItems = result.length;
  const totalPages = Math.ceil(totalItems / perPage);

  const start = (page - 1) * perPage;
  const data = result.slice(start, start + perPage);

  return {
    data,
    page,
    per_page: perPage,
    items: totalItems,
    first: 1,
    last: totalPages,
    pages: totalPages,
    next: page < totalPages ? page + 1 : null,
    prev: page > 1 ? page - 1 : null,
  };
}
