import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './recommendedProducts.css';

export default function RelatedProducts() {
  let apiUrl;

  const [products, setProducts] = useState([]);
  const [hoveredProductId, setHoveredProductId] = useState(null)
  if (process.env.NODE_ENV === 'production') {
    apiUrl = '/api/images/recommened'; // Use the production API URL
  } else {
    apiUrl = 'http://localhost:3000/api/images/recommened'; // Use the development API URL
  }

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

  const clothingSizes = ["XS","S","M","L","XL","2XL","3XL"]
  const shoeSizes = ["6","7","8","9","10","11","12"]

  function checkSizes(product) {
    if (product.sizeType === "shoes") {
      return shoeSizes.map((size) =>
        product.sizes.includes(size) ? (
          <div key={size} className="size">
            {size}
          </div>
        ) : (
          <div key={size} className="size faded-size">
            {size}
          </div>
        )
      );
    } else if (product.sizeType === "clothing") {
      return clothingSizes.map((size) =>
        product.sizes.includes(size) ? (
          <div key={size} className="size">
            {size}
          </div>
        ) : (
          <div key={size} className="size faded-size">
            {size}
          </div>
        )
      );
    }
    return null; // Return null if product sizeType is neither "shoes" nor "clothing"
  }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7, // Maximum number of slides to show
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          centerMode: false, // Disable center mode on smaller screens
        },
      },
    ],
  };

  return (

    <div className="carousel-container">
      <h5>Recommended Products</h5>
      <Slider {...settings}>
        {products.map((product) => (
          <div
            key={product.id}
            className="related-product"
            onMouseEnter={() => setHoveredProductId(product.id)}
            onMouseLeave={() => setHoveredProductId(null)}
          >
            <div className='pop-up'>
            {
              hoveredProductId === product.id&&
                <>
                <div className='new-tag'>NEW</div>
                <div style={{backgroundColor:product.color}}className='detail-tagRec'>
                  <h6>{product.name}</h6>
                  <p>{product.priceString}</p>
                </div>
                </>
              
            }
            </div>

            {
              hoveredProductId !== product.id &&

                  product.sizes&&
                  <div className='sizes'>
                    {
                      checkSizes(product)
                    }
                  </div>
            }

              <img
                src={hoveredProductId === product.id ? product.imageUrlBack : product.imageUrlFront}
                alt={product.name}
                className={hoveredProductId === product.id ? "carousel-image image-back":"carousel-image image-front"}
              />

            </div>
        ))}
      </Slider>
    </div>
  );
}
