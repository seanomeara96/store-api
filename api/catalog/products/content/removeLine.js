const validateParams = require("./utils/validateParams");
const getProductDescription = require("./getProductDescription");
const updateProductDescription = require("./updateProductDescription");
module.exports = (productId, lineToRemove) =>
  new Promise(async (resolve, reject) => {
    validateParams(productId, lineToRemove, reject);
    try {
      const productDescription = await getProductDescription(productId);
      console.log(productDescription);
      const updatedProductDescription = productDescription.replace(
        lineToRemove,
        ""
      );
      await updateProductDescription(productId, updatedProductDescription);
      if (productDescription == updatedProductDescription)
        return reject("no change was made");
      resolve();
    } catch (err) {
      reject(err);
    }
  });
