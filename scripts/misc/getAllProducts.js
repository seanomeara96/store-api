require("../../config").config("bf");
const api = require("../../api");
api.brands
  .getBrandByName("Joico")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
