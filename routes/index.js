const myController = require("../controllers");
const routes = require("express").Router();

routes.get("/", myController.awesomeFunction);

module.exports = routes;

app.listen(PORT, () => {
  console.log(`Test server running on port: ${PORT}`);
});