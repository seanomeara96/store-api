const { removeLine } = require("./modules/update");

removeLine(177, `<p>Proceive is an award winning fertility supplement</p>`)
  .then(() => {
    console.log("success");
  })
  .catch((err) => {
    console.log(err);
  });
