const applyCustomField = require("./applyCustomField");
module.exports = (productId, customField) =>
  new Promise((resolve, reject) => {
    let promises = [];
    customField.forEach(({ name, value }) => {
      promises.push(applyCustomField(productId, name, value));
    });
    Promise.allSettled(promises)
      .then((results) => resolve(results))
      .catch(reject);
  });
