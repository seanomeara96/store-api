const { getManyProductsBySKU } = require("../products/getManyProductsBySKU");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
let skuArray = [
  { sku: "GWP32" },
  { sku: "9448" },
  { sku: "10122" },
  { sku: "10151" },
];

getManyProductsBySKU(skuArray)
  .then((res) => {
    const data = res
      .map(
        ({ name, sku, inventory_level }) =>
          `<p>Name: ${name}, SKU: ${sku}, Inventory Level: ${inventory_level}</p>`
      )
      .join("\n");
    const msg = {
      to: "seanom96@gmail.com",
      from: "sean@beautyfeatures.ie",
      subject: "Sending with SendGrid is Fun",
      text: "Hello there",
      html: data,
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
  })
  .catch((err) => console.log(err));
