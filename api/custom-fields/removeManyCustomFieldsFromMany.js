const removeManyCustomFields = require("./removeManyCustomFields");

module.exports = (productIds, customFields) =>
  new Promise((resolve, reject) => {
    let promises = [];
    productIds.forEach((product) => {
      let idKey = Object.keys(product)[0];
      promises.push(removeManyCustomFields(product[idKey], customFields));
    });
    Promise.allSettled(promises).then(resolve).catch(reject);
  });
