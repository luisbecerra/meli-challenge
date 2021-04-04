const fetch = require("isomorphic-unfetch");
const { getPriceFraction, getPriceCents } = require("../lib/helpers");

const getItem = async (url, id) => {
  const productUrl = `${url}/items/${id}`;
  const response = await fetch(productUrl);
  const data = await response.json();

  const { error, status } = data;
  if (error) throw ({ error: "Product not found", status });

  const descriptionUrl = `${url}/items/${id}/description`;
  const descriptionResponse = await fetch(descriptionUrl);
  const descriptionData = await descriptionResponse.json();
  const { plain_text } = descriptionData;

  const {
    category_id,
    id: itemId,
    title,
    currency_id,
    price,
    pictures,
    condition,
    shipping,
    sold_quantity,
  } = data;

  const categoriesUrl = `${url}/categories/${category_id}`;
  const categoriesResponse = await fetch(categoriesUrl);
  const categoriesData = await categoriesResponse.json();
  const categories = categoriesData && categoriesData.path_from_root;
  const filteredCategories =
    categories && categories.map((category) => category.name);

  const formattedData = {
    author: {
      name: "Felipe",
      lastname: "Becerra",
    },
    item: {
      id: itemId,
      title,
      price: {
        currency: currency_id,
        amount: getPriceFraction(price),
        decimals: getPriceCents(price),
      },
      picture: pictures[0].url,
      condition,
      free_shipping: shipping.free_shipping,
      sold_quantity,
      description: plain_text,
    },
    categories: filteredCategories,
  };

  return formattedData;
};

module.exports = { getItem };
