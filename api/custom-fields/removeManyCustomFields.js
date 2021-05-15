const { removeCustomField } = require("./removeCustomField");

module.exports = (productId, customFields) =>
  new Promise((resolve, reject) => {
    let promises = [];
    customFields.forEach(({ name, value }) => {
      promises.push(removeCustomField(productId, name, value));
    });
    Promise.allSettled(promises).then(resolve).catch(reject);
  });
