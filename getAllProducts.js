const store = require("./config/axios-config");
store
  .get("/catalog/products?limit=5000")
  .then(({ data }) => {
    let count = 1;
    const productsArray = data.data;
    console.log(productsArray);
    let newArr = productsArray.map((product) => {
      let info = `${count} => ${product["id"]}  ${product["name"]} ${product["sku"]}\n`;
      count++;
      return info;
    });
    //console.log(newArr.join(""))
  })
  .catch((err) => {
    console.log(err);
  });
