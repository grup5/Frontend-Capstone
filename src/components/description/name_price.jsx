const Name_Price = ({parsedData}) => {
    return (
        <div id="name/price">
        {parsedData.map((item, index) => (
            <div key={index}>
                <div>{item.name}</div>
                <div>${Number(item.price).toFixed(2)}</div>
            </div>
        ))}
    </div>
    )
}

export default Name_Price