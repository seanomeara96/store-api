const { addLine } = require("./addLine");
exports.addLineToMany = (productIds, lineToAdd) =>
  new Promise((resolve, reject) => {
    let promises = [];
    productIds.forEach((product) => {
      const idKey = Object.keys(product)[0];
      promises.push(addLine(product[idKey], lineToAdd));
    });
    Promise.allSettled(promises)
      .then((results) => resolve(results))
      .catch(reject);
  });
