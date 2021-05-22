const validateParams = require("./utils/validateParams");
module.exports = {
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
   * @returns adds string to beginning of content
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
  removeLine: function (productId, lineToRemove) {
    return new Promise(async (resolve, reject) => {
      validateParams(productId, lineToRemove, reject);
      try {
        const productDescription = await this.getProductDescription(productId);
        console.log(productDescription);
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
