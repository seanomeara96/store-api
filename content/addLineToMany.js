const { addLineToMany } = require("./modules/update");

const productIds = [
 // no products
];

const lineToAdd = `<div style="padding: 12px 18px; margin-bottom: 12px; background-color: #ecdbec; border-radius: 4px; display: flex; align-items: center;">
<div style="padding-right: 12px;"><img src="https://cdn11.bigcommerce.com/s-63354/product_images/uploaded_images/gift-icon.png?t=1620198387&amp;_ga=2.1541873.1322443927.1620197854-9852056.1620197612" alt="gift icon" /></div>
<div>
<p style="margin-bottom: 0;">Get a <a href="https://www.beautyfeatures.ie/free-dermalogica-gift-with-purchase/">free gift</a> when you spend &euro;90 or more on Dermalogica</p>
</div>
</div>`;

addLineToMany(productIds, lineToAdd)
  .then((res) => console.log(res))
  .catch(() => console.log("something went wrong"));
