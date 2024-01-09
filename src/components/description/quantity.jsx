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
            <button className="qtyBtn minus" onClick={decreaseQuantity}>
                <i className="ad ad-minus-r" aria-hidden="true"></i> -
            </button>
            <input
                type="text"
                id="quantity"
                name="quantity"
                value={quantity}
                className="product-form__input qty"
                readOnly
            />
            <button className="qtyBtn plus" onClick={increaseQuantity}>
                <i className="ad ad-plus-r" aria-hidden="true"></i> +
            </button>
        </div>
    );
};

export default Quantity;
