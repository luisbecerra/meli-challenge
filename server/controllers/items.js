const { getItems } = require("../services/items");
const MELI_API_URL = "https://api.mercadolibre.com";

const items = async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Invalid params" });
  }

  if (query && query !== "undefined") {
    const formattedData = await getItems(MELI_API_URL, query);
    return res.status(200).json(formattedData);
  } else {
    return res.status(404).json({ status: 404, error: "No products found" });
  }
};

module.exports = { items };
