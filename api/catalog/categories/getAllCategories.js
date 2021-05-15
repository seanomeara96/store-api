const { getAll } = require("../../lib/getAll");
/**
 * This function fetches all categories resolves with an array of objects
 * @param {*} params
 * @returns
 */
module.exports = getAll("/catalog/categories");
