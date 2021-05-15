const applyManyCustomFields = require("./applyManyCustomFields");
module.exports = (productIds, customFields) =>
  new Promise((resolve, reject) => {
    let promises = [];
    productIds.forEach((product) => {
      const idKey = Object.keys(product);
      promises.push(applyManyCustomFields(product[idKey], customFields));
    });
    Promise.allSettled(promises)
      .then((results) => resolve(results))
      .catch(reject);
  });
