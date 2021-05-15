const getCustomFieldsByProductId = require("./getCustomFieldsByProductId");
const { store } = require("../../../config");
module.exports = (productId, name, value) =>
  new Promise(async (resolve, reject) => {
    if (name == "" || value == "")
      return reject("please provide a key & a value");
    try {
      const filters = await getCustomFieldsByProductId(productId);
      const filterToDelete = filters.find(
        (filter) => filter.name === name && filter.value === value
      );
      store
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
