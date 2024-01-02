const Name_Price = ({parsedData, dot}) => {
    return (
        <div id="name/price" style={{display: "flex", flexDirection: "column", fontFamily:'Fjalla One, sans-serif'}}>
        {parsedData.map((item, index) => (
            <div key={index}>
                <div style={{fontSize:'41px', letterSpacing: '0.02rem', fontWeight:'800', marginLeft:'4px', marginTop:'10px'}}>{item.name}</div>
                <div style={{fontSize:'24px', letterSpacing: '0.02rem', fontWeight:'600', color:'#6a6a6a', marginLeft:'4px'}}>${Number(item.price).toFixed(2)}</div>
            </div>
        ))}
    </div>
    )
}

export default Name_Price