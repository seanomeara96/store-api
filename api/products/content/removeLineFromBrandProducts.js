const { getProductsByBrand } = require("../getProductsByBrand");
const { removeLine } = require("./removeLine");
exports.removeLineFromBrandProducts = (brandName, lineToRemove) =>
  new Promise((resolve, reject) => {
    let promises = [];
    getProductsByBrand(brandName)
      .then((products) => {
        products.forEach(({ id }) => {
          promises.push(removeLine(id, lineToRemove));
        });
        Promise.allSettled(promises)
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      })
      .catch((err) => reject(err));
  });
