const content = require("./content");
const products = {
  /**
   * Fetches all products, 250 at a time recursively
   * @param {*} params
   * @returns resolves with an array of product objects
   */
  getAllProducts() {
    this.getAll(`/catalog/products`);
  },
  getManyProductsBySKU(skuArray) {
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
  getProductById(productId) {
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
  getProductsByBrand(name) {
    return new Promise((resolve, reject) =>
      this.getBrandIdByName(name).then((brand_id) =>
        this.getAllProducts({ brand_id })
          .then((res) => resolve(res))
          .catch((err) => reject(err))
      )
    ).catch((err) => reject(err));
  },
  getProductsByCategory() {
    // nothing here
  },
  updateProductById(productId, updatedProperty) {
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

Object.assign(products.prototype, content);

module.exports = products;
