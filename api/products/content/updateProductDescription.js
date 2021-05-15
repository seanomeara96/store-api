const { updateProductById } = require("../updateProductById");
exports.updateProductDescription = (productId, updatedProductDescription) =>
  new Promise((resolve, reject) => {
    updateProductById(productId, { description: updatedProductDescription })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
