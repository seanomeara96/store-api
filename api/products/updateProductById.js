const { store } = require("../../config");
module.exports = (productId, updatedProperty) =>
  new Promise((resolve, reject) => {
    store
      .put(`/catalog/products/${productId}`, {
        ...updatedProperty,
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
