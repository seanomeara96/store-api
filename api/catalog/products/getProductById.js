const { store } = require("../../config");
/**
 *
 * @param {*} productId
 * @returns product object
 */
module.exports = (productId) =>
  new Promise((resolve, reject) =>
    store
      .get(`/catalog/products/${productId}`)
      .then((response) => resolve(response.data.data))
      .catch((err) => reject(err))
  );
