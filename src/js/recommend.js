var vsSettings = {
  appKey: 'APP_KEY',
  fl: ["im_url", "price", "title", "product_url", 'brand', "discounted_price"],
    fq: [
        "country:hk",
        "sub_category:8",
        "brand:64" ,
        "gender:Female",
        "price:1,999999999999",
        "discounted_price:1,999999999999"
    ],
  limit: 15,
  detection: "all",
  botAgents: ['Googlebot'] //filter the search with the bot name in the request user agent
};

var displaySettings = {
  cardsToShow: 4,
  cardsToScroll: 4
};

var recommendationOpts = {
  imName: 'IM_NAME', //dynamic
  productDetails: { //common
    heading: 'title',
    productUrl: 'product_url',
    label: 'brand',
    price: "price",
    discountPrice: "discounted_price"
  },
  addToCartHoverIcon: false,
  addToCartStaticIcon: true,
  findSimilarHover: false,
  findSimilarStatic: true
};

var options = {
  vsSettings: vsSettings,
  displaySettings: displaySettings,
  recommendationOpts: recommendationOpts
};

$(document).ready(function() {
    Recommendation(document.getElementById("vs-recommendation"), options);
});
