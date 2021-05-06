const store = require("../config/axios-config");
const { getFilters } = require("./read");

const removeFilter = (productId, name, value) => {
  return new Promise(async (resolve, reject) => {
    if (name == "" || value == "") reject();
    try {
      const filters = await getFilters(productId);
      const filterToDelete = filters.find(
        (filter) => filter.name === name && filter.value === value
      );
      store
        .delete(
          `/catalog/products/${productId}/custom-fields/${filterToDelete.id}`
        )
        .then(resolve)
        .catch(reject);
    } catch (err) {
      reject(err);
    }
  });
};

const removeManyFilters = (productId, filters) => {
  return new Promise((resolve, reject) => {
    let promises = [];
    filters.forEach(({ name, value }) => {
      promises.push(removeFilter(productId, name, value));
    });
    Promise.allSettled(promises).then(resolve).catch(reject);
  });
};

const removeFilterFromMany = (productIds, name, value) => {
  return new Promise((resolve, reject) => {
    let promises = [];
    productIds.forEach((product) => {
      let idKey = Object.keys(product)[0];
      promises.push(removeFilter(product[idKey], name, value));
    });
    Promise.allSettled(promises).then(resolve).catch(reject);
  });
};

const removeManyFiltersFromMany = (productIds, filters) => {
  return new Promise((resolve, reject) => {
    let promises = [];
    productIds.forEach((product) => {
      let idKey = Object.keys(product)[0];
      promises.push(removeManyFilters(product[idKey], filters));
    });
    Promise.allSettled(promises).then(resolve).catch(reject);
  });
};

exports.removeFilter = removeFilter;
exports.removeManyFilters = removeManyFilters;
exports.removeFilterFromMany = removeFilterFromMany;
exports.removeManyFiltersFromMany = removeManyFiltersFromMany;
