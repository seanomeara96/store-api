const { getProductDescription } = require("./getProductDescription");
const { updateProductDescription } = require("./updateProductDescription");
const { validateParams } = require("./utils/validateParams");
exports.addLine = (productId, lineToAdd) =>
  new Promise(async (resolve, reject) => {
    validateParams(productId, lineToAdd, reject);
    try {
      const productDescription = await getProductDescription(productId);
      const updatedProductDescription = lineToAdd + productDescription;
      await updateProductDescription(productId, updatedProductDescription);
      resolve("Line added");
    } catch (err) {
      reject(err);
    }
  });
