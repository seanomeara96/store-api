const { store } = require("../../config");
module.exports = (productId, name, value) =>
  new Promise(async (resolve, reject) => {
    const data = {
      name,
      value,
    };
    try {
      const { status } = await store.post(
        `/catalog/products/${productId}/custom-fields`,
        data
      );
      resolve(status);
    } catch (err) {
      reject(err);
    }
  });
