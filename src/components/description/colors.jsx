import Quantity from './quantity.jsx'

const Colors = ({ parsedData }) => {
    const handleColorClick = (colorKey) => {
        console.log(colorKey); // Logs the color key when clicked
        console.log(parsedData)
    };

    return (
        <div style={{ paddingTop: '14px', fontFamily: 'Fjalla One, sans-serif' }}>
            COLOR: PLACEHOLDER <Quantity Quantity={Quantity} />
            <div id="colors" style={{ display: "flex", flexDirection: "row", paddingBottom: '24px' }}>
                {parsedData.map((item, index) => (
                    <div key={index}>
                        {Object.keys(item)
                            .filter(key => key.toLowerCase().includes('color'))
                            .map((colorKey, index) => (
                                <button
                                    key={colorKey}
                                    type='radio'
                                    className="colorbox"
                                    style={{
                                        backgroundColor: item[colorKey],
                                        padding: '4px',
                                        margin: '4px',
                                        width: '50px',
                                        height: '50px',
                                        boxSizing: "border-box",
                                        borderRadius: '4px',
                                        borderColor: "white",
                                        opacity: '65%',
                                    }}
                                    onClick={() => handleColorClick(colorKey)} // Handle click event
                                ></button>
                            ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Colors;
