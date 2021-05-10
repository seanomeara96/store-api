const { addLineToBrandProducts } = require("./modules/update");

addLineToBrandProducts("Baby Foot", "<p>Introduction</p>")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
