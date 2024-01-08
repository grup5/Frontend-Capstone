import { useState } from 'react';

const Quantity = () => {
    const [quantity, setQuantity] = useState(1);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    return (
        <div className="qtyField" title="Quantity" style={{ display: 'flex', alignItems: 'center' }}>
            <button className="qtyBtn minus" onClick={decreaseQuantity} style={{width: '34px', height: '32px', fontSize: '20px', backgroundColor: 'white', borderColor: 'lightgray', borderRight:'white', borderRadius: '4px'}}>
                <i className="ad ad-minus-r" aria-hidden="true"></i> -
            </button>
            <input
                type="text"
                id="quantity"
                name="quantity"
                value={quantity}
                className="product-form__input qty"
                readOnly
                style={{width: "24px", height: '30px', textAlign: 'center', fontSize: '22px', textAlign: 'center', border: '1px solid #ddddddd', fontFamily: 'Fjalla One, sans-serif'}}
            />
            <button className="qtyBtn plus" onClick={increaseQuantity} style={{width: '34px', height: '32px', fontSize: '20px', backgroundColor:'white', borderColor: 'white', borderLeft: 'white', borderTop: 'lightgray', borderRadius:'4px', }}>
                <i className="ad ad-plus-r" aria-hidden="true"></i> +
            </button>
        </div>
    );
};

export default Quantity;
