const express = require("express");
const bodyParser = require("body-parser")
const cors = require('cors')
const routes = require('./routes')



const PORT = 5000;

const app = express();

app.use(
  cors(),
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

routes(app);

const server = app.listen(PORT, () => {
  console.info(`App is now running on port ${PORT}!!!`);
});

module.exports = { app, server };
