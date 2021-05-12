const store = require("./config/axios-config");
const { getAll } = require("./requests/getAll");

const getAllVariants = getAll("/catalog/variants")

getAllVariants().then(res => console.log(res))