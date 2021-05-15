const axios = require("axios");
const config = require("../config/config");
class Store {
  constructor(storeName, version = 3) {
    const { storeHash, accessToken } = config[storeName];
    this.api = axios.create({
      baseURL: `https://api.bigcommerce.com/stores/${storeHash}/v${version}`,
      headers: accessToken,
    });
  }
}
