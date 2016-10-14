var vsSettings = {
  accessKey: 'ACCESS_KEY',
  secretKey: 'SECRET_KEY',
  fl: ["im_url", "price", "title", "product_url", 'brand', "discount_price"],
  limit: 15,
  detection: "all"
};

var displaySettings = {
  cardsToShow: 4,
  cardsToScroll: 4
}

var recommendationOpts = {
  imName: 'IM_NAME',
  productDetails: {
    heading: 'title',
    productUrl: 'product_url',
    label: 'brand',
    price: "price",
    discountPrice: "discount_price"
  },
  addToCartHoverIcon: false,
  addToCartStaticIcon: true,
  findSimilarHover: false,
  findSimilarStatic: true
}

var options = {
  vsSettings: vsSettings,
  displaySettings: displaySettings,
  recommendationOpts: recommendationOpts
};

$(document).ready(function() {
    Recommendation(document.getElementById("vs-recommendation"), options);
});
