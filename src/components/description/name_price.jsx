const Name_Price = ({parsedData, dot}) => {
    return (
        <div id="nameandprice">
        {parsedData.map((item, index) => (
            <div key={index}>
                <div id='itemname'>{item.name}</div>
                <div id='itemprice'>${Number(item.price).toFixed(2)}</div>
            </div>
        ))}
    </div>
    )
}

export default Name_Price