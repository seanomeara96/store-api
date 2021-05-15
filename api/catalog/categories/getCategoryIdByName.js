const getCategoryByName = require("./getCategoryByName");

module.exports = (name) =>
  new Promise((resolve, reject) =>
    getCategoryByName(name)
      .then(({ id }) => resolve(id))
      .catch((err) => reject(err))
  );
