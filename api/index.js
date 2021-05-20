const dotenv = require("dotenv");
const path = require("path");
const axios = require("axios");
dotenv.config({ path: path.resolve(__dirname, "../.env") });
const catalog = require("./catalog");
class Manager {
  constructor(storeInitials, version = 3) {
    storeInitials = storeInitials.toUpperCase();
    let stores = [
      "BF",
      "BSK",
      "AH",
      "AS",
      "HUK",
      "HIE",
      "IH",
      "BS",
      "PB",
      "FS",
    ];

    if (!stores.includes(storeInitials))
      throw new Error("Provide a valid store");

    this.store = axios.create({
      baseURL: `https://api.bigcommerce.com/stores/${
        process.env[`${storeInitials}_STORE_HASH`]
      }/v${version}`,
      headers: { "x-auth-token": process.env[`${storeInitials}_XAUTHTOKEN`] },
    });
  }
}
Object.assign(Manager.prototype, catalog);
module.exports = Manager;
