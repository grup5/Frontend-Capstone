import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { RelatedProduct, RecommenedProduct } from "./product.js"
const app = express()
const port = process.env.PORT || 3000

app.use(cors());
app.use(express.json())
//See the documentation in the product.js file for how to properly use the RelatedProduct and RecommenedProduct classes
//These are used to create object to display the proper information for the carousels.
//Related Products
const caterpillerBack = new RelatedProduct("THE CATERPILLER HAT", 'caterpiller-front.webp','caterpiller-back.webp',30.00,true,"#77bff2");
const coolBeanieRelated = new RelatedProduct("THE COOL BEANIE 2.0", 'cool-beanie-front.webp','cool-beanie-back.webp',23.00,true,"#246CA0");
const coolHat = new RelatedProduct("THE PLAY COOL TRUCKER", 'cool-hat-front.webp','cool-hat-back.webp',30.00,true,"#f05454");
const paintBucket = new RelatedProduct("THE PAINT BUCKET", 'paint-bucket-front.webp','paint-bucket-back.webp',30.00,true,"#ffff00");
const truck = new RelatedProduct("THE TRUCK TRUCKER", 'truck-front.webp','truck-back.webp',30.00,true,"#f05454");
const varsityCap = new RelatedProduct("THE VARSITY CAP", 'varsity-cap-front.webp','varsity-cap-back.webp',30.00,true,"#f05454");
// Recommended Products
const baloonHoodie = new RecommenedProduct('THE BALLOON HOODIE','balloon-hoodie-front.webp','balloon-hoodie-back.webp',60.00,true,'#E25333','clothing',['XS','S','M','L']);
const camp = new RecommenedProduct('THE CAMP COOL BEANIE','camp-front.webp','camp-back.webp',26.00,true,'#77bff2','hat',null);
const coolBeanieRecommened = new RecommenedProduct("THE COOL BEANIE 2.0", 'cool-beanie-front.webp','cool-beanie-back.webp',23.00,true,"#246CA0",'hat',null);
const fleece = new RecommenedProduct('THE FLEECE QUARTER ZIP','fleece-front.webp','fleece-back.webp',60.00,true,'#77bff2','clothing',['XS','S','M','L','XL','2XL','3XL']);
const loveNot = new RecommenedProduct('THE LOVE ME NOT HOODIE','love-not-front.webp','love-not-back.webp',60.00,true,'#ffff00','clothing',['XS','S','M','L','XL','2XL','3XL']);
const playIt = new RecommenedProduct('THE PLAY IT COOL TEE','play-it-front.webp','play-it-back.webp',32.00,true,'#f05454','clothing',['XS','S','M','L','XL','2XL','3XL']);
const rubixHoodie = new RecommenedProduct('THE RUBIX HOODIE','rubix-front.webp','rubix-back.webp',60.00,true,'#f05454','clothing',['XS','S','M','L','XL','2XL','3XL']);
const slide = new RecommenedProduct('THE COOL SLIDES','slide-front.webp','slide-back.webp',37.00,true,'#77bff2','shoes',['6','7','8','9','10','11']);


//Get all route for the related images
app.get('/api/images/related',(req,res)=>{
  try{
    res.status(200).json(RelatedProduct.RelatedProducts)
  }catch{
    res.status(500).json({error:"Internal Error"})
  }
})
//Get all route for the recommened images
app.get('/api/images/recommened',(req,res)=>{
  try{
    res.status(200).json(RecommenedProduct.RecommenedProducts)
  }catch{
    res.status(500).json({error:"Internal Error"})
  }
})

app.listen(port,()=>{console.log("Server Running on Port:",port)})

