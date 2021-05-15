const { config } = require("../../config");
const { products } = require("../../api");
config("bf");
const { getAllProducts } = products;
getAllProducts()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
