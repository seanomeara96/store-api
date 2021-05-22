const validateParams = require("./utils/validateParams");
module.exports = {
  /**
   *
   * @param {number} productId
   * @param {string} lineToAdd
   * @returns adds lin to beginning of content
   */
  addLine: function (productId, lineToAdd) {
    return new Promise(async (resolve, reject) => {
      validateParams(productId, lineToAdd, reject);
      try {
        const productDescription = await this.getProductDescription(productId);
        const updatedProductDescription = lineToAdd + productDescription;
        await this.updateProductDescription(
          productId,
          updatedProductDescription
        );
        resolve("Line added");
      } catch (err) {
        reject(err);
      }
    });
  },
  /**
   *
   * @param {string} brandName
   * @param {string} lineToAdd
   * @returns adds string to beginning of product content for a brand
   */
  addLineToBrandProducts: function (brandName, lineToAdd) {
    new Promise((resolve, reject) => {
      let promises = [];
      this.getProductsByBrand(brandName)
        .then((products) => {
          products.forEach(({ id }) => {
            promises.push(this.addLine(id, lineToAdd));
          });
          Promise.allSettled(promises)
            .then((res) => resolve(res))
            .catch((err) => reject(err));
        })
        .catch((err) => reject(err));
    });
  },
  /**
   *
   * @param {array} productIds
   * @param {string} lineToAdd
   * @returns adds line to many products specified in a list
   */
  addLineToMany: function (productIds, lineToAdd) {
    return new Promise((resolve, reject) => {
      let promises = [];
      productIds.forEach((product) => {
        const idKey = Object.keys(product)[0];
        promises.push(this.addLine(product[idKey], lineToAdd));
      });
      Promise.allSettled(promises)
        .then((results) => resolve(results))
        .catch(reject);
    });
  },
  /**
   *
   * @param {number} id
   * @returns product description of a product by id
   */
  getProductDescription: function (id) {
    return new Promise(async (resolve, reject) => {
      try {
        const product = await this.store.get(`/catalog/products/${id}`);
        const productDescription = product.data.data.description;
        resolve(productDescription);
      } catch (err) {
        reject(err);
      }
    });
  },
  /**
   *
   * @param {number} productId
   * @param {string} lineToRemove
   * @returns removes string from product content
   */
  removeLine: function (productId, lineToRemove) {
    return new Promise(async (resolve, reject) => {
      validateParams(productId, lineToRemove, reject);
      try {
        const productDescription = await this.getProductDescription(productId);
        const updatedProductDescription = productDescription.replace(
          lineToRemove,
          ""
        );
        await this.updateProductDescription(
          productId,
          updatedProductDescription
        );
        if (productDescription == updatedProductDescription)
          return reject("no change was made");
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  },
  /**
   *
   * @param {string} brandName
   * @param {string} lineToRemove
   * @returns remove line from product content by brand
   */
  removeLineFromBrandProducts: function (brandName, lineToRemove) {
    return new Promise((resolve, reject) => {
      let promises = [];
      this.getProductsByBrand(brandName)
        .then((products) => {
          products.forEach(({ id }) => {
            promises.push(this.removeLine(id, lineToRemove));
          });
          Promise.allSettled(promises)
            .then((res) => resolve(res))
            .catch((err) => reject(err));
        })
        .catch((err) => reject(err));
    });
  },
  /**
   *
   * @param {array} productIds
   * @param {string} lineToRemove
   * @returns removes line from many products
   */
  removeLineFromMany: function (productIds, lineToRemove) {
    return new Promise((resolve, reject) => {
      let promises = [];
      productIds.forEach((product) => {
        const idKey = Object.keys(product)[0];
        promises.push(this.removeLine(product[idKey], lineToRemove));
      });
      Promise.allSettled(promises)
        .then((res) => resolve(res))
        .catch(reject);
    });
  },
  /**
   *
   * @param {number} productId
   * @param {string} updatedProductDescription
   * @returns updates product description
   */
  updateProductDescription: function (productId, updatedProductDescription) {
    return new Promise((resolve, reject) => {
      this.updateProductById(productId, {
        description: updatedProductDescription,
      })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }, // redundant?
};
