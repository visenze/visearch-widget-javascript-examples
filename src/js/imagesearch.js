var vsSettings = {
  appKey: 'APP_KEY',
  fl: ["im_url", "price", "title", "product_url", 'brand', 'category', 'price'],
  limit: 15,
  detection: "all",
  botAgents: ['Googlebot'] //filter the search with the bot name in the request user agent
};

var displaySettings = {
  totalNumProducts: 50,
  hasTopPagination: true,
  cardsPerRow: 3,
  filterTitle: "Filter by"
};

var filterList = [
  {
    title: 'Categories',
    type: 'category',
    schema: 'category',
    style: "check-box"
  },
  {
    title: 'Price',
    type: 'price',
    schema: 'price',
    style : 'range-bar'
  }
];

var onChange = function(value) {
  if(value.status == "OK") {
    $('.dummy-ele').css('display', 'none');
  }
}

var imageSearchOpts = {
  productDetails:  { //common
    heading: 'title',
    productUrl: 'product_url',
    label: 'brand',
    price: "price",
    discountPrice: "discount_price"
  },
  filters: filterList,
  searchTitle: "Image search results",
  hasHoverCartIcon: true,
  hasStaticCartIcon: false,
  hasHoverFindSimilar: true,
  hasStaticFindSimilar: false,
  findSimilarText: "Find similar",
  onQueryComplete: onChange
}

var options = {
  vsSettings: vsSettings,
  displaySettings: displaySettings,
  imageSearchOpts: imageSearchOpts
}

$(document).ready(function() {
    ImageSearch(
        document.getElementById("vs-imagesearch"),
        document.getElementById("vs-filter"),
        document.getElementById("vs-result-box"),
        document.getElementById("vs-preview"), options);
});
