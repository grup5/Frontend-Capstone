import React, { useState } from 'react';
import SizeDisplay from './SizeDisplay'; // Import the SizeDisplay component from its file

const SizeGuide = ({ size, parsedData }) => {
  const [showSizeDisplay, setShowSizeDisplay] = useState(false);

  const toggleSizeDisplay = () => {
    setShowSizeDisplay(!showSizeDisplay);
  };

  return (
    <>
      <div id='showsize'
        onClick={toggleSizeDisplay}
      >
        SIZE GUIDE
      </div>
      <div id='sizeguidecontainer' style={{height: '210px'}}>
      {showSizeDisplay && (
        <SizeDisplay size={size} parsedData={parsedData} />
      )}
      </div>
    </>
  );
};

export default SizeGuide;
