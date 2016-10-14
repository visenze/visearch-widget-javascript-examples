var vsSettings = {
  accessKey: 'ACCESS_KEY',
  secretKey: 'SECRET_KEY',
  fl: ["im_url", "price", "title", "product_url", 'brand', 'discount_price'],
  limit: 15,
  detection: "all"
};

var displaySettings = {
  showQueryProduct: false,
  hasScrollBox: false,
  modalSize: 80,
  cardsToShow: 4,
  cardsToScroll: 4
}

var findSimilarOpts = {
  imName: "IM_NAME",
  productDetails: {
    productUrl: 'product_url',
    heading: 'title',
    label: 'brand',
    price: "price",
    discountPrice: "discount_price"
  },
  addToCartHoverIcon: true,
  addToCartStaticIcon: false
}

var options = {
  vsSettings: vsSettings,
  displaySettings: displaySettings,
  findSimilarOpts: findSimilarOpts
};

$(document).ready(function() {
    FindSimilar(document.getElementById("vs-findsimilar"), options);
});
