import { useState, useEffect } from 'react';
import Data from './testdata-description.json';
import List from './list.jsx'
import Name_Price from './name_price.jsx';

const Description = () => {
    const [parsedData, setParsedData] = useState([]);
    const [tag, setTag] = useState('');
    const [colorSelect, setColorSelect] = useState(1)
    const [dot, setDot] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const parsed = JSON.parse(JSON.stringify(Data));
                const response = await fetch('https://shirtz.cool/cdn/shop/products/design_c14bcdd2-327f-4150-a5d9-8139932be4c6.png?v=1681138595');
                const response2 = await fetch('//shirtz.cool/cdn/shop/t/96/assets/Bullet_Point_Skull.svg?v=1673649334971943231700531286');
                if (response.ok && response2.ok) {
                    const imageData = await response.blob();
                    const dotData = await response2.blob();
                    setTag(URL.createObjectURL(imageData));
                    setDot(URL.createObjectURL(imageData));
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
        <div id="description-container">
                <div id="image">
                    <img src={tag} alt="Product" />
                </div>
                <Name_Price Name_Price={Name_Price}
                    parsedData={parsedData}
                />
        <List List={List}
            parsedData={parsedData}
        />

        </div>
    );
};

export default Description;