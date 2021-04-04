const { index, items, item } = require("../controllers");

const routes = (app) => {
  app.get("/", index);
  app.get("/items", items);
  app.get("/items/:id", item);
};

module.exports = routes;
