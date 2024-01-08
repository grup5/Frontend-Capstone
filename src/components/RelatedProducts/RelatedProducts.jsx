import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    apiUrl = '/api/images/related'; // Use the production API URL
  } else {
    apiUrl = 'http://localhost:3000/api/images/related'; // Use the development API URL
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

  // These are the setting for the carousel
  const settings = {
    infinite: true, //Loops forever
    speed: 500, //Animation speed
    slidesToShow: 5, // Maximum number of slides to show
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
      
      <h3>Related Products</h3>
      <Slider {...settings}>
        {/* This maps out each of the products and adds them to the carousel */}
        {products.map((product) => (
          <div
            key={product.id}
            className="related-product"
            onMouseEnter={() => setHoveredProductId(product.id)} //Check for hover
            onMouseLeave={() => setHoveredProductId(null)}
          >
            {
              hoveredProductId === product.id&& // if the hovedovered product is this one change the image 
              <div className='pop-up'>
                {/* Added the new tag in the top left corner */}
                <div className='new-tag'>NEW</div> 
                {/* Add the detail tag */}
                <div style={{backgroundColor:product.color}}className='detail-tagRec'>
                  <h6>{product.name}</h6>
                  <p>{product.priceString}</p>
                </div>
              </div>
            }
            {/* Create the image */}
            <img
              src={hoveredProductId === product.id ? product.imageUrlBack : product.imageUrlFront} //This changes the image when hovered
              alt={product.name}
              className={hoveredProductId === product.id ? "carousel-image image-back":"carousel-image image-front"} // This changes the class when hovered
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
