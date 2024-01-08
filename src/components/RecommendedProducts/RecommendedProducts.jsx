import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';


//Note that some of this code might look strange so head to react-slick for reference
//https://react-slick.neostack.com/docs/example/simple-slider
export default function RelatedProducts() {
  //This is the state responsible for controlling the product images in the carousel
  const [products, setProducts] = useState([]);
  const [hoveredProductId, setHoveredProductId] = useState(null)
  // This bit of code changes the url used by the API depending on the environment
  // This is a built-in feature and you do not need to manually se the NODE_ENV variable
  let apiUrl;
  if (process.env.NODE_ENV === 'production') {
    apiUrl = '/api/images/recommened'; // Use the production API URL
  } else {
    apiUrl = 'http://localhost:3000/api/images/recommened'; // Use the development API URL
  }

  //This is used to fetch an array of products to display in the carousel
  useEffect(() => {
    async function getProducts() {
      try {
        const res = await axios.get(apiUrl);
        setProducts(res.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    getProducts();
  }, []);

  //These are the full range of size options for the size chart at the bottom of the products
  const clothingSizes = ["XS","S","M","L","XL","2XL","3XL"]
  const shoeSizes = ["6","7","8","9","10","11","12"]

  //This function checks the avaible sizes based on the product info passed in from the backend and fades out the sizes that are not available

  //Note this function is a bit wet, but it is kinda confusing so I decided to make sure it is more verbose.
  function checkSizes(product) {
    //Dynamically set the background color
    const style = {backgroundColor:product.color,color:"white", borderColor:"white"}
    //Check if the product type is shoes
    if (product.sizeType === "shoes") {
      return shoeSizes.map((size) =>
      // If not included set to faded-size class
        product.sizes.includes(size) ? (
          <div key={size} className="size" style={style}>
            {size}
          </div>
        ) : (
          <div key={size} className="size faded-size" style={style}>
            {size}
          </div>
        )
      );
    //Check if the product type is clothing
    } else if (product.sizeType === "clothing") {
      return clothingSizes.map((size) =>
        product.sizes.includes(size) ? (
          // If not included set to faded-size class
          <div key={size} className="size" style={style}>
            {size}
          </div>
        ) : (
          <div key={size} className="size faded-size" style={style}>
            {size}
          </div>
        )
      );
    }
    return null; // Return null if product sizeType is neither "shoes" nor "clothing"
  }

    // These are the setting for the carousel
  const settings = {
    infinite: true, //Loops forever
    speed: 500, //Animation speed
    slidesToShow: 7, // Maximum number of slides to show
    slidesToScroll: 1, // How many slides move during each scroll
    arrows: true, // If there are arrows or not
    autoplay: true, // These settings dictate the autoplay feature
    speed: 1000,
    autoplaySpeed: 5000,
    responsive: [ //These allow you to change the number of images being show at once based on the browser
      {
        breakpoint: 1022,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: false, // Disable center mode on smaller screens
        },
      },
    ],
  };

  return (

    <div className="carousel-container">
      <h3>Recommended Products</h3>
      <Slider {...settings}>
        {/* This maps out each of the products and adds them to the carousel */}
        {products.map((product) => (
          <div
            key={product.id}
            className="related-product"
            onMouseEnter={() => setHoveredProductId(product.id)} //Check for hover
            onMouseLeave={() => setHoveredProductId(null)}
          >
            <div className='pop-up'>
            {
              hoveredProductId === product.id&&// if the hovedovered product is this one change the image 
                <>
                {/* Added the new tag in the top left corner */}
                <div className='new-tag'>NEW</div>
                {/* Add the detail tag */}  
                <div style={{backgroundColor:product.color}}className='detail-tagRec'>
                  <h6>{product.name}</h6>
                  <p>{product.priceString}</p>
                </div>
                </>
              
            }
            </div>
            {/* This creates the size bar at the bottom when not hovered over */}
            {
              hoveredProductId !== product.id &&

                  product.sizes&&
                  <div className='sizes'>
                    {
                      checkSizes(product)
                    }
                  </div>
            }
              {/* Create the image */}
              <img
                src={hoveredProductId === product.id ? product.imageUrlBack : product.imageUrlFront}//This changes the image when hovered
                alt={product.name}
                className={hoveredProductId === product.id ? "carousel-image image-back":"carousel-image image-front"}// This changes the class when hovered
              />

            </div>
        ))}
      </Slider>
    </div>
  );
}
