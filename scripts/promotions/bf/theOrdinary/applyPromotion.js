const { addLineToMany } = require("../../content/modules/update");
const productIds = [
  { "Product ID": 2541 },
  { "Product ID": 2542 },
  { "Product ID": 2543 },
  { "Product ID": 2544 },
  { "Product ID": 2545 },
  { "Product ID": 2546 },
  { "Product ID": 2547 },
  { "Product ID": 2548 },
  { "Product ID": 2549 },
  { "Product ID": 2595 },
  { "Product ID": 2596 },
  { "Product ID": 2597 },
  { "Product ID": 2598 },
  { "Product ID": 2599 },
  { "Product ID": 2600 },
  { "Product ID": 2601 },
  { "Product ID": 2602 },
  { "Product ID": 2691 },
  { "Product ID": 2692 },
  { "Product ID": 2694 },
  { "Product ID": 2695 },
  { "Product ID": 2696 },
  { "Product ID": 2697 },
  { "Product ID": 2698 },
  { "Product ID": 2699 },
  { "Product ID": 2700 },
  { "Product ID": 2701 },
  { "Product ID": 2816 },
  { "Product ID": 2817 },
  { "Product ID": 2818 },
  { "Product ID": 2832 },
  { "Product ID": 2833 },
  { "Product ID": 2834 },
  { "Product ID": 2835 },
  { "Product ID": 2836 },
  { "Product ID": 3007 },
  { "Product ID": 3008 },
  { "Product ID": 3029 },
  { "Product ID": 3057 },
  { "Product ID": 3066 },
  { "Product ID": 3068 },
  { "Product ID": 3069 },
  { "Product ID": 3070 },
  { "Product ID": 3103 },
  { "Product ID": 3104 },
  { "Product ID": 3128 },
  { "Product ID": 3344 },
  { "Product ID": 3345 },
  { "Product ID": 3346 },
  { "Product ID": 3347 },
  { "Product ID": 3348 },
  { "Product ID": 3349 },
  { "Product ID": 3350 },
  { "Product ID": 3351 },
  { "Product ID": 3433 },
  { "Product ID": 3539 },
  { "Product ID": 3540 },
  { "Product ID": 3541 },
  { "Product ID": 3735 },
  { "Product ID": 3739 },
  { "Product ID": 4820 },
  { "Product ID": 4821 },
];
const lineToAdd = `<div style="padding: 12px 18px; margin-bottom: 12px; background-color: #ecdbec; border-radius: 4px; display: flex; align-items: center;">
<div style="padding-right: 12px;"><img src="https://cdn11.bigcommerce.com/s-63354/product_images/uploaded_images/gift-icon.png?t=1620198387&amp;_ga=2.1541873.1322443927.1620197854-9852056.1620197612" alt="gift icon" /></div>
<div>
<p style="margin-bottom: 0;">Free <a href="https://www.beautyfeatures.ie/free-the-ordinary-gift-with-purchase/">Hyaluronic 30ml</a> when you spend &euro;50 or more on The Ordinary</p>
</div>
</div>`;
addLineToMany(productIds, lineToAdd)
  .then((res) => console.log(res))
  .catch("something went wrong");