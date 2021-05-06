const { removeLineFromMany } = require("./modules/update");

const productIds = [
  { "Product ID": 177 },
  { "Product ID": 178 },
  { "Product ID": 179 },
  { "Product ID": 180 },
  { "Product ID": 181 },
];

const lineToRemove = `<p>Proceive is an award winning fertility supplement</p>`;

removeLineFromMany(productIds, lineToRemove)
  .then((res) => console.log(res))
  .catch(() => console.log("something went wrong"));
