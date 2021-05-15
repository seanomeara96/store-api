const { store } = require("../../../config");
module.exports = (productId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await store.get(
        `/catalog/products/${productId}/custom-fields`
      );
      resolve(response.data.data);
    } catch (err) {
      reject(err);
    }
  });
