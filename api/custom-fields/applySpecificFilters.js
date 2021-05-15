const { applyFilter } = require("./applyFilter");
exports.applySpecificFilters = (data) =>
  new Promise((resolve, reject) => {
    let promises = [];
    data.forEach((item) => {
      const id = item["Product Id"];
      const filters = item["Filters"]
        .split(";")
        .map((filter) => filter.split("="));
      filters.forEach((filter) => {
        promises.push(applyFilter(id, filter[0], filter[1]));
      });
    });
    Promise.allSettled(promises).then(resolve).catch(reject);
  });
