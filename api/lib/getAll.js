/**
 * Get-all function to retrieve all info from a given url
 * @param {string} url supply url for get request
 * @returns
 */
exports.getAll = function (url, params = {}) {
  return new Promise((resolve, reject) => {
    let pageNumber = 1;
    let aggregatedData = [];
    const getData = async () => {
      try {
        const { data } = await this.store.get(url, {
          params: {
            limit: 250,
            page: pageNumber,
            ...params,
          },
        });
        if (data.data === undefined) return reject("data is undefined");
        let dataArray = data.data;
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
    };
    getData();
  });
};
