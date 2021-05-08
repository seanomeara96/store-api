const { getAll } = require("../requests/getAll");
/**
 * Fetches all products, 250 at a time recursively
 * @param {*} params
 * @returns resolves with an array of product objects
 */
const getAllProducts = getAll(`/catalog/products`);
getAllProducts()
  .then((res) => console.log(res.length))
  .catch((err) => console.log(err));
