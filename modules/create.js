const store = require("../config/axios-config");

const applyFilter = (productId, name, value) =>
  new Promise(async (resolve, reject) => {
    try {
      const { status } = await store.post(
        `/catalog/products/${productId}/custom-fields`,
        {
          name,
          value,
        }
      );
      resolve(status);
    } catch (err) {
      reject(err);
    }
  });

const applyFilterToMany = (productIds, name, value) =>
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

const applyManyFilters = (productId, filters) =>
  new Promise((resolve, reject) => {
    let promises = [];
    filters.forEach(({ name, value }) => {
      promises.push(applyFilter(productId, name, value));
    });
    Promise.allSettled(promises)
      .then((results) => resolve(results))
      .catch(reject);
  });

const applyManyFiltersToMany = (productIds, filters) =>
  new Promise((resolve, reject) => {
    let promises = [];
    productIds.forEach((product) => {
      const idKey = Object.keys(product);
      promises.push(applyManyFilters(product[idKey], filters));
    });
    Promise.allSettled(promises)
      .then((results) => resolve(results))
      .catch(reject);
  });

const applySpecificFilters = (SKUs) =>
  new Promise((resolve, reject) => {
    let promises = [];
    SKUs.forEach((SKU) => {
      const id = SKU["Product Id"];
      const filters = SKU["Filters"]
        .split(";")
        .map((filter) => filter.split("="));
      filters.forEach((filter) => {
        promises.push(applyFilter(id, filter[0], filter[1]));
      });
    });
    Promise.allSettled(promises).then(resolve).catch(reject);
  });

exports.applyFilter = applyFilter;
exports.applyFilterToMany = applyFilterToMany;
exports.applyManyFilters = applyManyFilters;
exports.applyManyFiltersToMany = applyManyFiltersToMany;
exports.applySpecificFilters = applySpecificFilters;
