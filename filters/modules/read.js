const store = require("../config/axios-config");

const getFilters = (productId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await store.get(
        `/catalog/products/${productId}/custom-fields`
      );
      resolve(response.data.data);
    } catch (err) {
      reject(err);
    }
  });

const getFiltersOfMany = (productIds) =>
  new Promise((resolve, reject) => {
    let promises = [];
    let response = {};
    productIds.forEach((product) => {
      const idKey = Object.keys(product)[0];
      promises.push(
        getFilters(product[idKey]).then(
          (res) => (response[product[idKey]] = res)
        )
      );
    });
    Promise.allSettled(promises)
      .then(() => resolve(response))
      .catch(reject);
  });

exports.getFilters = getFilters;
exports.getFiltersOfMany = getFiltersOfMany;
