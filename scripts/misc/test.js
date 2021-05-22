const Manager = require("../../api");

const ihManager = new Manager("ih");
const bfManager = new Manager("bf");
ihManager
  .getAllProducts()
  .then((res) => console.log("inhealth products qty ", res.length));
bfManager
  .getAllProducts()
  .then((res) => console.log("bf Products qty", res.length));
