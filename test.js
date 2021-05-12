const axios = require("axios");
const config = require("./config/config");
const instance = axios.create({
  baseURL: `https://api.bigcommerce.com/stores/${config.huk}/v2`,
  headers: config.huk_xAuthTokenHeader,
});

const getAll =
  (URL) =>
  (params = {}) =>
    new Promise((resolve, reject) => {
      let pageNumber = 1;
      let aggregatedData = [];
      async function getData() {
        try {
          const { data } = await instance.get(URL, {
            params: {
              limit: 250,
              page: pageNumber,
              ...params,
            },
          });
          let dataArray = data;
          if (dataArray.length) {
            aggregatedData.push(...dataArray);
            pageNumber++;
            getData();
          } else {
            resolve(aggregatedData);
          }
        } catch (err) {
          reject(err);
        }
      }
      getData();
    });

const getAllBlogPosts = getAll("/blog/posts");

getAllBlogPosts().then((blogPosts) => {
  const results = blogPosts.map(({ body }) => body.includes("http://"));
  console.log(results);
});
