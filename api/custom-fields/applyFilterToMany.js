const { applyFilter } = require("./applyFilter");
exports.applyFilterToMany = (productIds, name, value) =>
  new Promise((resolve, reject) => {
    let promises = [];
    productIds.forEach((product) => {
      const idKey = Object.keys(product)[0];
      promises.push(applyFilter(product[idKey], name, value));
    });
    Promise.allSettled(promises)
      .then((results) => resolve(results))
      .catch(reject);
  });