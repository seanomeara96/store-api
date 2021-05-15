const applyCustomField = require("./applyCustomField");
module.exports = (data) =>
  new Promise((resolve, reject) => {
    let promises = [];
    data.forEach((item) => {
      const id = item["Product Id"];
      const customFields = item["Filters"]
        .split(";")
        .map((filter) => filter.split("="));
      customFields.forEach((filter) => {
        promises.push(applyCustomField(id, filter[0], filter[1]));
      });
    });
    Promise.allSettled(promises).then(resolve).catch(reject);
  });
