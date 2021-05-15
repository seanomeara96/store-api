const { store } = require("../../../config");
module.exports = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const product = await store.get(`/catalog/products/${id}`);
      const productDescription = product.data.data.description;
      resolve(productDescription);
    } catch (err) {
      reject(err);
    }
  });
