const store = require("../config/axios-config");

/**
 * Fetches all products, 250 at a time recursively
 * @param {*} params
 * @returns resolves with an array of product objects
 */
exports.getAllProducts = (params = {}) =>
  new Promise((resolve, reject) => {
    let pageNumber = 1;
    let products = [];
    async function getProducts() {
      try {
        const { data } = await store.get(
          `/catalog/products?limit=250&page=${pageNumber}`,
          {
            params,
          }
        );
        let productsArray = data.data;
        if (productsArray.length) {
          products.push(...productsArray);
          pageNumber++;
          getProducts();
        } else {
          resolve(products);
        }
      } catch (err) {
        reject(err);
      }
    }
    getProducts();
  });
