const { applyFilter } = require("./applyFilter");
exports.applyManyFilters = (productId, filters) =>
  new Promise((resolve, reject) => {
    let promises = [];
    filters.forEach(({ name, value }) => {
      promises.push(applyFilter(productId, name, value));
    });
    Promise.allSettled(promises)
      .then((results) => resolve(results))
      .catch(reject);
  });
