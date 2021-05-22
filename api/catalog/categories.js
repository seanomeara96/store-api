module.exports = {
  /**
   * This function fetches all categories resolves with an array of objects
   * @param {*} params
   * @returns
   */
  getAllCategories: function (params) {
    return new Promise((resolve, reject) => {
      this.getAll("/catalog/categories", params)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  },
  /**
   * Fetches a category object by name, if there are multiple it will reject
   * @param {*} name
   * @returns
   */
  getCategoryByName: function (name) {
    return new Promise((resolve, reject) =>
      this.getAllCategoriesget({ name })
        .then((res) => {
          if (res.length > 1)
            return reject("there are multiple categories with this name");
          resolve(res[0]);
        })
        .catch((err) => reject(err))
    );
  },
  /**
   *
   * @param {string} name
   * @returns catageory id integer
   */
  getCategoryIdByName: function (name) {
    return new Promise((resolve, reject) =>
      this.getCategoryByName(name)
        .then(({ id }) => resolve(id))
        .catch((err) => reject(err))
    );
  },
};
