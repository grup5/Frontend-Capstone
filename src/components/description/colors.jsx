const Colors = ({ parsedData }) => {
    return (
        <div id="colors" style={{ display: "flex", flexDirection: "row" }}>
            {parsedData.map((item) => (
                <div>
                    {Object.keys(item)
                        .filter(key => key.toLowerCase().includes('color'))
                        .map((colorKey, index) => (
                            <button 
                                key={index}
                                type='radio' 
                                className="colorbox"
                            style={{
                                backgroundColor: item[colorKey],
                                padding: '4px',
                                margin: '4px',
                                width:'35px',
                                height:'35px',
                                boxSizing: "border-box",
                                borderRadius:'5px',
                                borderColor: "white",
                            }}></button>
                        ))}
                </div>
            ))}
        </div>
    )
}

export default Colors