const Manager = require("../../api/api");
const fsManager = new Manager("huk");
fsManager.getAllProducts().then((res) => console.log(res.length));
