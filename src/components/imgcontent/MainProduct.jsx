import React, { useState } from 'react';
import './MainProduct.css';

const MainProduct = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const changeImage = (index) => {
    setCurrentImageIndex(index);
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    setCursorPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setZoomLevel(1.5);
  };

  const handleMouseLeave = () => {
    setZoomLevel(1);
    setCursorPosition({ x: 0, y: 0 });
  };

  return (
    <div className="image-gallery">
      <div className="sidebar">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => changeImage(index)}
            className={currentImageIndex === index ? 'active-thumbnail' : 'thumbnail'}
          />
        ))}
      </div>
      <div className="main-content">
        <div
          className="large-image"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            style={{
              transform: `scale(${zoomLevel})`,
              transformOrigin: `${cursorPosition.x * 100}% ${cursorPosition.y * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MainProduct;
