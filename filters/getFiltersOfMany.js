const { getFiltersOfMany } = require("./modules/read");

const productIds = [
  { "Product ID": 177 },
  { "Product ID": 178 },
  { "Product ID": 179 },
  { "Product ID": 180 },
  { "Product ID": 181 },
];

getFiltersOfMany(productIds)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
