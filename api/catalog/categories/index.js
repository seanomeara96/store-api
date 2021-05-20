const categories = {
  /**
   * This function fetches all categories resolves with an array of objects
   * @param {*} params
   * @returns
   */
  getAllCategories() {
    this.getAll("/catalog/categories");
  },
  /**
   * Fetches a category object by name, if there are multiple it will reject
   * @param {*} name
   * @returns
   */
  getCategoryByName(name) {
    return new Promise((resolve, reject) =>
      this.getAllCategoriesgetAllCategories({ name })
        .then((res) => {
          if (res.length > 1)
            return reject("there are multiple categories with this name");
          resolve(res[0]);
        })
        .catch((err) => reject(err))
    );
  },
  getCategoryIdByName(name) {
    return new Promise((resolve, reject) =>
      this.getCategoryByName(name)
        .then(({ id }) => resolve(id))
        .catch((err) => reject(err))
    );
  },
};
module.exports = categories;
