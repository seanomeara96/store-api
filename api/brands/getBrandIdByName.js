const getBrandByName = require("./getBrandByName");
/**
 * Fetches brand id by name & resolves with a number
 * @param {*} name
 * @returns
 */
module.exports = (name) =>
  new Promise((resolve, reject) => {
    getBrandByName(name)
      .then(({ id }) => resolve(id))
      .catch((err) => reject(err));
  });
