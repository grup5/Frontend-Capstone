import React, { useState, useEffect } from 'react';
import './StickyFooter.css';
import redbeanie from '/img/footerimages/redbeanie.webp';
import yellowbeanie from '/img/footerimages/yellowbeanie.webp';
import bluebeanie from '/img/footerimages/bluebeanie.webp';
import greenbeanie from '/img/footerimages/greenbeanie.webp';

const StickyFooter = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [style, setStyle] = useState('');

    const beanieImages = {
        red: redbeanie,
        yellow: yellowbeanie,
        blue: bluebeanie,
        green: greenbeanie
    };

    //appears after 300px scroll
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className={`sticky-footer ${isVisible ? 'show' : ''}`}>
          <div className="content">
                <img src={beanieImages[style] || '/img/footerimages/redbeanie.webp'} alt="Beanie" />
                <div>The Play Cool Beanie</div>
          </div>
            <div className="custom-select">
                <select value={style} onChange={e => setStyle(e.target.value)}>
                    <option value="red">Red - $25.00</option>
                    <option value="yellow">Yellow - $25.00</option>
                    <option value="blue">Blue - $25.00</option>
                    <option value="green">Green - $25.00</option>
                </select>
            </div>
            <div className="actions">
              <div className='quantity-controls'>
                <button onClick={decrementQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={incrementQuantity}>+</button>
                </div>
                <div className="cart-button">
                <button>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default StickyFooter;
