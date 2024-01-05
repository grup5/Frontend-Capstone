const SizeDisplay = ({size, parsedData}) => {
    const productName = parsedData && parsedData.length > 0 ? parsedData[0].name : '';

    return (
        <div id='sizechart' style={{textAlign: 'center', height: '210px'}}>
        <div style={{
            fontFamily: 'Fjalla One, sans-serif',
            textAlign: 'center',
            marginBottom: '2px',
            marginLeft: '50px',
            color: '#333',
            fontSize: '15px',
            letterSpacing: '0.02em',
        }}>
            {parsedData[0].name}
        </div>
            {size && <img src={size} style={{textAlign: 'center', width: '350px'}} alt="Size Guide" />}
        </div>
    )
}

export default SizeDisplay