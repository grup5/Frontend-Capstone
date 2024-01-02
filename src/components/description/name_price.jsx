const Name_Price = ({parsedData, dot}) => {
    return (
        <div id="name/price" style={{display: "flex", flexDirection: "column", fontFamily:'Fjalla One, sans-serif'}}>
        {parsedData.map((item, index) => (
            <div key={index}>
                <div style={{fontSize:'41px', fontWeight:'bold', marginLeft:'2px', marginTop:'10px'}}>{item.name}</div>
                <div style={{fontSize:'24px', fontWeight:'600', color:'#6a6a6a', marginLeft:'2px', opacity:'90%'}}>${Number(item.price).toFixed(2)}</div>
            </div>
        ))}
    </div>
    )
}

export default Name_Price