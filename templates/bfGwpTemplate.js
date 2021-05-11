// can we replace the domain in the linke
const bfGwpTemplate = (link, linkText, threshold) => `<div
  style="
    padding: 12px 18px;
    margin-bottom: 12px;
    background-color: #ecdbec;
    border-radius: 4px;
    display: flex;
    align-items: center;
  "
>
  <div style="padding-right: 12px">
    <img
      src="https://cdn11.bigcommerce.com/s-63354/product_images/uploaded_images/gift-icon.png?t=1620198387&amp;_ga=2.1541873.1322443927.1620197854-9852056.1620197612"
      alt="gift icon"
    />
  </div>
  <div>
    <p style="margin-bottom: 0">
      Free
      <a href="${link.replace(
        /[a-z\s]+:\/\/[w]{0,3}.?beautyfeatures.ie/gi,
        "%%GLOBAL_ShopPathSSL%%"
      )}"
        >${linkText}</a
      >
      when you spend &euro;${threshold} or more on Caudalie
    </p>
  </div>
</div>
`;

console.log(
  bfGwpTemplate(
    "https://www.beautyfeatures.ie/free-caudalie-gift-with-purchase/",
    "handy man",
    "100"
  )
);