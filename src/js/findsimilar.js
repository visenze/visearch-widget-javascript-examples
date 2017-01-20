var vsSettings = {
  appKey: 'APP_KEY',
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
  imName: "IM_NAME", //dynamic
  productDetails: { //common dynamic
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

//get config first.
$(document).ready(function() {
    FindSimilar(document.getElementById("vs-findsimilar"), options);
});
