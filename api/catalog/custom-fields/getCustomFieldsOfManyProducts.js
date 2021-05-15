const getCustomFieldsByProductId = require("./getCustomFieldsByProductId");
module.exports = (productIds) =>
  new Promise((resolve, reject) => {
    let response = {};
    Promise.allSettled(
      productIds.map((product) =>
        getCustomFieldsByProductId(product[Object.keys(product)[0]])
          .then((res) => (response[product[Object.keys(product)[0]]] = res))
          .catch((err) =>
            reject(
              "there was a problem getting this product's custom fields",
              err
            )
          )
      )
    )
      .then(() => resolve(response))
      .catch(reject);
  });
