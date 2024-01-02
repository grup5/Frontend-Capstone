const Quantity = () => {
    return (
        <div class="qtyField" title="Quantity">
            <a class="qtyBtn minus">
                <i class="ad ad-minus-r" aria-hidden="true"></i>
            </a>
            <input type="text" id="quantity" name="quantity" value="1" class="product-form__input qty"/>
            <a class="qtyBtn plus">
                <i class="ad ad-plus-r" aria-hidden="true"></i>
            </a>
        </div>
    )
}

export default Quantity