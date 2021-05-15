const { config } = require("../../config");
config("bf");
const api = require("../../api");
api.brands
  .getAllBrands()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
