const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors')

const { getItems } = require("./items");
const { getItem } = require("./item");

const MELI_API_URL = 'https://api.mercadolibre.com';

const PORT = 5000;

const app = express();

app.use(
  cors(),
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).json({ msg: "WORKING!!!" });
});

app.get("/items", async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Invalid params" })
  }

  if (query && query !== 'undefined') {
    const formattedData = await getItems(MELI_API_URL, query)
    return res.status(200).json(formattedData)
  } else {
    return res.status(404).json({ status: 404, error: 'No products found' })
  }
});

app.get("/items/:id", async (req, res) => {
  const id = req.params.id;

  if (!id) {
    res.status(404).json({ error: "Item not found!" });
  }

  try{
    const formattedData = await getItem(MELI_API_URL, id)
    return res.status(200).json(formattedData)
  } catch(error){
    res.status(400).json({ error: error.error });
  }
});

const server = app.listen(PORT, () => {
  console.info(`App is now running on port ${PORT}!!!`);
});

module.exports = { app, server };
