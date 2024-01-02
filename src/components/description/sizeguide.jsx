// sizeguide.jsx
import {useState} from 'react'
import SizeDisplay from './sizedisplay.jsx'

const SizeGuide = ({size, parsedData}) => {
    return (
        <><div style={{
            fontFamily: 'Fjalla One, sans-serif',
            fontSize: '24px',
            letterSpacing: '0.02rem',
            maxWidth: '500px',
            marginTop: '15px',
            marginBottom: '15px',
            borderBottom: '1px solid #333',
            fontSize: '28px',
            fontWeight: '600',
            color: '#333'
        }}>SIZE GUIDE</div>
        <SizeDisplay SizeDisplay={SizeDisplay} size={size} parsedData={parsedData}/>
       </>
    );
};

export default SizeGuide;
