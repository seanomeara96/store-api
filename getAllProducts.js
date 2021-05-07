const store = require("./config/axios-config");
let pageNumber = 1;
let products = [];
async function getAllProducts() {
  try {
    const { data } = await store.get(
      `/catalog/products?limit=250&page=${pageNumber}`
    );
    const productsArray = data.data;
    console.log(typeof [...productsArray])
    // console.log(products)
    products.push(productsArray);
    if (productsArray.length) {
      pageNumber++;
      getAllProducts();
    } else {
      console.log(products.lentgh)
    }
  } catch (err) {
    console.log(err);
  }
}
getAllProducts()