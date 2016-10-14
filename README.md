# visearch-widget-javascript-examples

Examples on how to use the ViSearch Widget SDK.

## How to Run
Clone the repo and run locally with the following commands

```
//to install the package dependencies
npm install

//to start a local server
gulp start
```

It will open a local server at ```http://localhost:8080/```

## Config the Params

To view the widgets result, you need to set the configuration correctly. You can find the configuration of the widgets in '/src/js/'.

For **Find Similar** and **Recommendation** Widgets, you should set the imName to a particular im_name in your indexed image database.

```
var imName = "IM_NAME";
```

For all the widgets, you should configure the key pair and the metadata schema to be used in the display:

```
var vsSettings = {
  accessKey: 'ACCESS_KEY',
  secretKey: 'SECRET_KEY',
  fl: ["im_url", "price", "title", "product_url", 'brand', "desc", "discount_price"],
  limit: 15
};

var productDetails = {
  heading: 'title',
  productUrl: 'product_url',
  label: 'brand',
  price: "price",
  discountPrice: "discount_price"
};
```

For detailed documentation on how to integrate and use the SDK, please refer to the our

- [Find Similar](http://developers.visenze.com/solutions/findsimilar/)
- [You May Also Like](http://developers.visenze.com/solutions/recommendation/)
- [Search by Color](http://developers.visenze.com/solutions/uploadsearch/)
- [Search by Image](http://developers.visenze.com/solutions/colorsearch/)
