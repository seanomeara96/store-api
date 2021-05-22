module.exports = {
  content: require("./content"),
  /**
   * Fetches all products, 250 at a time recursively
   * @param {*} params
   * @returns resolves with an array of product objects
   */
  getAllProducts: function () {
    return new Promise((resolve, reject) => {
      this.getAll(`/catalog/products`)
        .then((products) => resolve(products))
        .catch((err) => reject(err));
    });
  },
  getManyProductsBySKU: function (skuArray) {
    return new Promise((resolve, reject) => {
      let promises = [];
      let products = [];
      skuArray.forEach((SKU) => {
        promises.push(
          this.getAllProducts({
            sku: SKU[Object.keys(SKU)[0]],
          })
            .then((product) => products.push(product[0]))
            .catch((err) => reject(err))
        );
      });
      Promise.allSettled(promises)
        .then(() => resolve(products))
        .catch((err) => console.log(err));
    });
  },

  /**
   *
   * @param {*} productId
   * @returns product object
   */
  getProductById: function (productId) {
    return new Promise((resolve, reject) =>
      this.store
        .get(`/catalog/products/${productId}`)
        .then((response) => resolve(response.data.data))
        .catch((err) => reject(err))
    );
  },
  /**
   * Fetches all products by brand name, resolves with an array of objects
   * @param {*} name
   * @returns
   */
  getProductsByBrand: function (name) {
    return new Promise((resolve, reject) =>
      this.getBrandIdByName(name).then((brand_id) =>
        this.getAllProducts({ brand_id })
          .then((res) => resolve(res))
          .catch((err) => reject(err))
      )
    ).catch((err) => reject(err));
  },
  getProductsByCategory: function () {
    // nothing here
  },
  updateProductById: function (productId, updatedProperty) {
    return new Promise((resolve, reject) => {
      this.store
        .put(`/catalog/products/${productId}`, {
          ...updatedProperty,
        })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  },
};
