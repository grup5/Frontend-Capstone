//Name is the product full name
//The imageUrlFront is the basic front image url: like hat.jpg or sweater.png
//The imageUrlBack is the url for the back image, aka the image which the carousel changes to when hovered over
//The price is the price of the item just in a float format of 80.00 like this
//The priceString is a string conversion of the price used for displaying
//The newItem boolean is to indicate whether or not the item is new or not. This triggers the new popup.
//The color is the color of the price and item name pop up when hover over. The color can be (red, orange, yellow, lightBlue, darkBlue)
export default class Product{
  constructor(name,imageUrlFront,imageUrlBack,price,newItem,color){
    this.name = name
    this.imageUrlFront = imageUrlFront
    this.imageUrlBack = imageUrlBack
    this.price = price
    this.priceString = '$' + price.toFixed(2)
    this.newItem = newItem
    this.color = color
    
  }
}
//When a product is created it automatically is added to the RelatedProducts array.
export class RelatedProduct extends Product{
  static RelatedProducts = []
  constructor(name,imageUrlFront,imageUrlBack,price,newItem,color,baseURL='public/img/relatedProductsImages'){
    super(name,imageUrlFront,imageUrlBack,price,newItem,color)
    this.baseURL = baseURL
    RelatedProduct.RelatedProducts.push(this)
    this.imageUrlFront = `${this.baseURL}/${this.imageUrlFront}`
    this.imageUrlBack = `${this.baseURL}/${this.imageUrlBack}`
  }
}
//This is the class for the recommened products.
//The sizeType is either shoes, clothing, or none
//Hats typically have no size
//sizes is all of the sizes avaible: This is an array that can hold values from clothing: [XS-3XL] or shoes: [6-12]
//For example you would fill it out like this
// rubixHoodie = new RecommenedProduct('The Rubix Hoodie','rubix-front.webp','rubix-front.webp',60.00,true,'red','clothing',['XS','S','M','L','XL','2XL','3XL'] )
export class RecommenedProduct extends Product{
  static RecommenedProducts = []
  constructor(name,imageUrlFront,imageUrlBack,price,newItem,color,sizeType,sizes,baseURL='public/img/recommendedProductsImages'){
    super(name,imageUrlFront,imageUrlBack,price,newItem,color)
    this.sizeType = sizeType
    this.sizes = sizes
    this.baseURL = baseURL
    this.imageUrlFront = `${this.baseURL}/${this.imageUrlFront}`
    this.imageUrlBack = `${this.baseURL}/${this.imageUrlBack}`
    RecommenedProduct.RecommenedProducts.push(this)
  }
}

