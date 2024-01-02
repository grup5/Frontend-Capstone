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
            {
              hoveredProductId === product.id&&<div className='new-tag'>NEW</div>
            }
            {
              hoveredProductId === product.id&&<div style={{backgroundColor:product.color}}className='detail-tag'><h6>{product.name}</h6><p>{product.priceString}</p></div>
            }
            <img
              src={hoveredProductId === product.id ? product.imageUrlBack : product.imageUrlFront}
              alt={product.name}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
