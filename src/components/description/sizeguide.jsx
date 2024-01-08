import React, { useState } from 'react';
import SizeDisplay from './SizeDisplay'; // Import the SizeDisplay component from its file

const SizeGuide = ({ size, parsedData }) => {
  const [showSizeDisplay, setShowSizeDisplay] = useState(false);

  const toggleSizeDisplay = () => {
    setShowSizeDisplay(!showSizeDisplay);
  };

  return (
    <>
      <div
        style={{
          fontFamily: 'Fjalla One, sans-serif',
          fontSize: '24px',
          letterSpacing: '0.02rem',
          marginRight: '8px',
          marginTop: '15px',
          marginBottom: '15px',
          borderBottom: '1px solid #333',
          fontWeight: '600',
          color: '#333',
          cursor: 'pointer', // To indicate it's clickable
        }}
        onClick={toggleSizeDisplay}
      >
        SIZE GUIDE
      </div>
      <div style={{height: '210px'}}>
      {showSizeDisplay && (
        <SizeDisplay size={size} parsedData={parsedData} />
      )}
      </div>
    </>
  );
};

export default SizeGuide;
