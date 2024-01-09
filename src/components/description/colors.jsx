import { useState, useEffect } from 'react';
import Quantity from './quantity.jsx';

const Colors = ({ parsedData }) => {
    const [selectedColorKey, setSelectedColorKey] = useState(null); // State to track selected color key
    const [selectedColorValue, setSelectedColorValue] = useState(null); // State to track selected color value

    // Set default selected color on component mount
    useEffect(() => {
        // Check if parsedData exists and has at least one item
        if (parsedData && parsedData.length > 0) {
            const firstItem = parsedData[0];
            const firstColorKey = Object.keys(firstItem).find(key => key.toLowerCase().includes('color'));
            const firstColorValue = firstItem[firstColorKey];
            setSelectedColorKey(firstColorKey);
            setSelectedColorValue(firstColorValue);
        }
    }, [parsedData]); // Run effect when parsedData changes

    const handleColorClick = (colorKey, colorValue) => {
        setSelectedColorKey(colorKey); // Update selected color key
        setSelectedColorValue(colorValue); // Update selected color value
    };

    return (
        <>
        <div style={{paddingTop: '30px', fontSize: '24px', display: 'flex', alignItems: 'center', fontFamily: 'Fjalla One, sans-serif' }}>
            <div style={{ marginRight: '20px' }}>
                COLOR: {selectedColorValue ? selectedColorValue : 'PLACEHOLDER'}
            </div>
            <Quantity Quantity={Quantity} style={{ marginRight: '20px' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', paddingTop: ''}}>
                <div id="colors" style={{ display: 'flex', flexDirection: 'row', paddingBottom: '24px' }}>
                    {parsedData.map((item, index) => (
                        <div key={index}>
                            {Object.entries(item) // Using Object.entries to access both key and value
                                .filter(([key]) => key.toLowerCase().includes('color'))
                                .map(([colorKey, colorValue], index) => (
                                    <button
                                        key={colorKey}
                                        type='radio'
                                        className="colorbox"
                                        style={{
                                            backgroundColor: colorValue,
                                            padding: '4px',
                                            margin: '4px',
                                            width: '50px',
                                            height: '50px',
                                            boxSizing: 'border-box',
                                            borderRadius: '4px',
                                            borderColor: selectedColorKey === colorKey ? 'red' : 'white',
                                            cursor: 'pointer'
                                        }}
                                        onClick={() => handleColorClick(colorKey, colorValue)} // Handle click event
                                    ></button>
                                ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Colors;
