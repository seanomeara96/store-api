const store = require("../config/axios-config");
/**
 * This function fetches all categories resolves with an array of objects
 * @param {*} params
 * @returns
 */
exports.getAllCategories = (params = {}) =>
  new Promise(async (resolve, reject) => {
    try {
      const { data } = await store.get("/catalog/categories", {
        params: {
          limit: 250,
          ...params,
        },
      });
      resolve(data.data);
    } catch (err) {
      reject(err);
    }
  });
