require("../../config").config("ih");
const api = require("../../api");
api.redirects
  .getAllRedirects()
  .then((res) => console.log(res.length))
  .catch((err) => console.log(err));
