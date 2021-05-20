const brands = {
  /**
   * This function fetches all brands resolves with an array of objects
   * @param {*} params
   * @returns
   */
  getAllBrands() {
    this.getAll("/catalog/brands");
  },
  /**
   * Fetches a brand by name & resolves with a brand object
   * @param {*} name
   * @returns
   */
  getBrandByName(name) {
    return new Promise((resolve, reject) => {
      this.getAllBrands({ name })
        .then((res) => resolve(res[0]))
        .catch((err) => reject(err));
    });
  },
  /**
   * Fetches brand id by name & resolves with a number
   * @param {*} name
   * @returns
   */
  getBrandIdByName(name) {
    new Promise((resolve, reject) => {
      getBrandByName(name)
        .then(({ id }) => resolve(id))
        .catch((err) => reject(err));
    });
  },
};

module.exports = brands;
