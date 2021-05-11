const axios = require("axios");
const config = require("./config");
const store = axios.create({
  baseURL: `https://api.bigcommerce.com/stores/${config.huk}/v3`,
  headers: config.huk_xAuthTokenHeader,
});
module.exports = store;
