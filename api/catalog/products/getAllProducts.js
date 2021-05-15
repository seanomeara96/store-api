const { getAll } = require("../../lib/getAll");
/**
 * Fetches all products, 250 at a time recursively
 * @param {*} params
 * @returns resolves with an array of product objects
 */
module.exports = getAll(`/catalog/products`);
