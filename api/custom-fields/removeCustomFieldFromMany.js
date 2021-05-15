const { removeCustomField } = require("./removeCustomField");

module.exports = (productIds, name, value) =>
  new Promise((resolve, reject) => {
    let promises = [];
    productIds.forEach((product) => {
      let idKey = Object.keys(product)[0];
      promises.push(removeCustomField(product[idKey], name, value));
    });
    Promise.allSettled(promises)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
