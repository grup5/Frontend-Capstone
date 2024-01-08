import { useState, useEffect } from 'react';
import Data from './testdata-description.json';
import List from './list.jsx';
import Name_Price from './name_price.jsx';
import Bubble from './bubble.jsx';
import Colors from './colors.jsx';
import AddToCart from './addtocart.jsx';
import OneSizeFitsAll from './onesizefitsall.jsx';
import SizeGuide from './sizeguide.jsx';
import "./style.css";

const Description = () => {
    const [parsedData, setParsedData] = useState([]);
    const [tag, setTag] = useState('');
    const [dot, setDot] = useState('');
    const [skull, setSkull] = useState('');
    const [size, setSize] = useState('');
    const [colorSelect, setColorSelect] = useState(1);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const parsed = JSON.parse(JSON.stringify(Data));
                const response1 = await fetch('https://shirtz.cool/cdn/shop/products/design_c14bcdd2-327f-4150-a5d9-8139932be4c6.png?v=1681138595');
                const response2 = await fetch('//shirtz.cool/cdn/shop/t/96/assets/Bullet_Point_Skull.svg?v=1673649334971943231700531286');
                const response3 = await fetch('//shirtz.cool/cdn/shop/t/96/assets/skulldark.svg?v=177280873494877837891700531286');
                const response4 = await fetch('https://cdn.shopify.com/s/files/1/1297/1509/files/beanie_480x480.svg?v=1681194839');
                if (response1.ok && response2.ok && response3.ok && response4.ok) {
                    const imageData = await response1.blob();
                    const dotData = await response2.blob();
                    const skullData = await response3.blob();
                    const sizeData = await response4.blob();
                    setTag(URL.createObjectURL(imageData));
                    setDot(URL.createObjectURL(dotData));
                    setSkull(URL.createObjectURL(skullData));
                    setSize(URL.createObjectURL(sizeData));
                    setParsedData(parsed);
                    setLoading(false);
                } else {
                    throw new Error('Failed to fetch image');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    if(loading){
        return (
            <div></div>
        )
    }

    return (
        <div id="descriptioncontainer">
            <div style={{display: "flex"}}>
                <div id="image">
                    <img src={tag} alt="Product" style={{height: '100px', width: 'auto'}} />
                </div>
                <Name_Price Name_Price={Name_Price}
                    parsedData={parsedData}
                />
            </div>
            <div style={{display: "flex", fontFamily: 'Fjalla One, sans-serif'}}>
                <div>
                    <img src={skull} style={{
                    height: "100px",
                    width: 'auto',
                    marginLeft: '2px',
                    paddingTop: '14px'}}/>
                </div>
                <Bubble 
                    Bubble={Bubble}
                    parsedData={parsedData}
                />
            </div>
            <List List={List}
                parsedData={parsedData}
                dot={dot}
            />
            <OneSizeFitsAll OneSizeFitsAll={OneSizeFitsAll}/>
            <Colors
                Colors={Colors}
                parsedData={parsedData}
                colorSelect={colorSelect}
                setColorSelect={setColorSelect}
            />
            <AddToCart AddToCart={AddToCart}/>
            <SizeGuide
                SizeGuide={SizeGuide}
                parsedData={parsedData}
                size={size}
            />
        </div>
    );
};

export default Description;