const { getAll } = require("./requests/getAll");

const getAllBlogs = getAll("/blog/posts");

getAllBlogs()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
