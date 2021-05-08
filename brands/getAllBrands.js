const store = require("../config/axios-config");
/**
 * This function fetches all brands resolves with an array of objects
 * @param {*} params
 * @returns
 */
exports.getAllBrands = (params = {}) =>
  new Promise(async (resolve, reject) => {
    try {
      const { data } = await store.get("/catalog/brands", { params });
      resolve(data.data);
    } catch (err) {
      reject(err);
    }
  });
