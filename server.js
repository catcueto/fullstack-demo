// path is a library native to node, no need to run another npm i
const path = require("path");
const express = require("express");
const sequelize = require("./config/connection");
// our routes can be found in controllers folder
const routes = require("./controllers");
// const model = require("./models");

const app = express();
// this will allow accepting json data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

const PORT = process.env.PORT || 3001;

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("Listening on PORT # http://localhost:3001");
  });
});
