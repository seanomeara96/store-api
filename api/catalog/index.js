const brands = require("./brands");
const categories = require("./categories");
const customFields = require("./custom-fields");
const products = require("./products");

const catalog = {};

Object.assign(catalog.prototype, brands);
Object.assign(catalog.prototype, categories);
Object.assign(catalog.prototype, customFields);
Object.assign(catalog.prototype, products);

module.exports = catalog;
