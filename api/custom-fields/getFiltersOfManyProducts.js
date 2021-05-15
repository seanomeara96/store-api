exports.getFiltersOfManyProducts = (productIds) =>
  new Promise((resolve, reject) => {
    let response = {};
    Promise.allSettled(
      productIds.map((product) =>
        getFilters(product[Object.keys(product)[0]])
          .then((res) => (response[product[Object.keys(product)[0]]] = res))
          .catch((err) => reject("there was a problem getting filters", err))
      )
    )
      .then(() => resolve(response))
      .catch(reject);
  });
