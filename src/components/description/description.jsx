import { useState, useEffect } from 'react';
import Data from './testdata-description.json';

const Description = () => {
    const [parsedData, setParsedData] = useState([]);
    const [fish, setFish] = useState('');
    const [colorSelect, setColorSelect] = useState(1)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const parsed = JSON.parse(JSON.stringify(Data));
                const response = await fetch('https://shirtz.cool/cdn/shop/products/design_c14bcdd2-327f-4150-a5d9-8139932be4c6.png?v=1681138595');
                if (response.ok) {
                    const imageData = await response.blob();
                    setFish(URL.createObjectURL(imageData));
                    setParsedData(parsed);
                } else {
                    throw new Error('Failed to fetch image');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div id="description-container" style={{fontFamily: "Fjalla One,Arial,Tahoma,Verdana,sans-serif", backgroundColor: "#fff"}}>
            <div id="top-description">
                <div id="image">
                    <img src={fish} alt="Product" />
                </div>
                <div id="name/price">
                    {parsedData.map((item, index) => (
                        <div key={index}>
                            <div>{item.name}</div>
                            <div>${Number(item.price).toFixed(2)}</div>
                            <ul id="description-list">
                                {Object.keys(item).map(key => {
                                    if (key.includes('com')) {
                                        return <li key={key}>{item[key]}</li>;
                                    }
                                    return null;
                                })}
                            </ul>
                        </div>
                    ))}
                </div>
                <div id="quantity-bar">
                    Color: 
                </div>
            </div>
        </div>
    );
};
    
export default Description;
    