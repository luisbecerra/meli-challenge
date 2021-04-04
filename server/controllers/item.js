const { getItem } = require("../services/item");
const MELI_API_URL = "https://api.mercadolibre.com";

const item = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    res.status(404).json({ error: "Item not found!" });
  }

  try {
    const formattedData = await getItem(MELI_API_URL, id);
    return res.status(200).json(formattedData);
  } catch (error) {
    res.status(400).json({ error: error.error });
  }
};

module.exports = { item };
