const { getAll } = require("../requests/getAll");
/**
 * This function fetches all brands resolves with an array of objects
 * @param {*} params
 * @returns
 */
const getAllBrands = getAll("/catalog/brands");

getAllBrands()
  .then((res) => console.log(res.length))
  .catch((err) => console.log(err));
