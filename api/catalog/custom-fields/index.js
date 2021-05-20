const customFields = {
  applyCustomField(productId, name, value) {
    return new Promise(async (resolve, reject) => {
      const data = {
        name,
        value,
      };
      try {
        const { status } = await this.store.post(
          `/catalog/products/${productId}/custom-fields`,
          data
        );
        resolve(status);
      } catch (err) {
        reject(err);
      }
    });
  },
  applyCustomFieldsToMany(productIds, name, value) {
    return new Promise((resolve, reject) => {
      let promises = [];
      productIds.forEach((product) => {
        const idKey = Object.keys(product)[0];
        promises.push(this.applyCustomField(product[idKey], name, value));
      });
      Promise.allSettled(promises)
        .then((results) => resolve(results))
        .catch(reject);
    });
  },
  applyManyCustomFields(productId, customField) {
    return new Promise((resolve, reject) => {
      let promises = [];
      customField.forEach(({ name, value }) => {
        promises.push(this.applyCustomField(productId, name, value));
      });
      Promise.allSettled(promises)
        .then((results) => resolve(results))
        .catch(reject);
    });
  },
  applyManyCustomFieldsToMany(productIds, customFields) {
    return new Promise((resolve, reject) => {
      let promises = [];
      productIds.forEach((product) => {
        const idKey = Object.keys(product);
        promises.push(this.applyManyCustomFields(product[idKey], customFields));
      });
      Promise.allSettled(promises)
        .then((results) => resolve(results))
        .catch(reject);
    });
  },
  applySpecificCustomFields(data) {
    return new Promise((resolve, reject) => {
      let promises = [];
      data.forEach((item) => {
        const id = item["Product Id"];
        const customFields = item["Filters"]
          .split(";")
          .map((filter) => filter.split("="));
        customFields.forEach((filter) => {
          promises.push(this.applyCustomField(id, filter[0], filter[1]));
        });
      });
      Promise.allSettled(promises).then(resolve).catch(reject);
    });
  },
  getCustomFieldsByProductId(productId) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.store.get(
          `/catalog/products/${productId}/custom-fields`
        );
        resolve(response.data.data);
      } catch (err) {
        reject(err);
      }
    });
  },
  getCustomFieldsOfManyProducts(productIds) {
    new Promise((resolve, reject) => {
      let response = {};
      Promise.allSettled(
        productIds.map((product) =>
          this.getCustomFieldsByProductId(product[Object.keys(product)[0]])
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
  },
  removeCustomField(productId, name, value) {
    return new Promise(async (resolve, reject) => {
      if (name == "" || value == "")
        return reject("please provide a key & a value");
      try {
        const filters = await this.getCustomFieldsByProductId(productId);
        const filterToDelete = filters.find(
          (filter) => filter.name === name && filter.value === value
        );
        this.store
          .delete(
            `/catalog/products/${productId}/custom-fields/${filterToDelete.id}`
          )
          .then(resolve)
          .catch((err) =>
            reject("something went wrong while deleting this filter", err)
          );
      } catch (err) {
        reject("error fetching this products filters", err);
      }
    });
  },
  removeCustomFieldFromMany(productIds, name, value) {
    return new Promise((resolve, reject) => {
      let promises = [];
      productIds.forEach((product) => {
        let idKey = Object.keys(product)[0];
        promises.push(this.removeCustomField(product[idKey], name, value));
      });
      Promise.allSettled(promises)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  },
  removeManyCustomFields(productId, customFields) {
    return new Promise((resolve, reject) => {
      let promises = [];
      customFields.forEach(({ name, value }) => {
        promises.push(this.removeCustomField(productId, name, value));
      });
      Promise.allSettled(promises).then(resolve).catch(reject);
    });
  },
  removeManyCustomFieldsFromMany(productIds, customFields) {
    return new Promise((resolve, reject) => {
      let promises = [];
      productIds.forEach((product) => {
        let idKey = Object.keys(product)[0];
        promises.push(
          this.removeManyCustomFields(product[idKey], customFields)
        );
      });
      Promise.allSettled(promises).then(resolve).catch(reject);
    });
  },
};
module.exports = customFields;
