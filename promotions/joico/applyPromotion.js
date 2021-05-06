const { addLineToMany } = require("../../content/modules/update");

const productIds = [];
const lineToAdd = ``

addLineToMany()
  .then((res) => console.log(res))
  .catch(() => {
    console.log("something went wrong");
  });
