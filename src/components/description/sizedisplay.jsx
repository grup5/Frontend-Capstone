const SizeDisplay = ({size, parsedData}) => {

    return (
        <div id='sizechart' style={{textAlign: 'center', height: '210px'}}>
            <div id='sizeitemname'>
                {parsedData[0].name}
            </div>
            {size && <img src={size} style={{textAlign: 'center', width: '350px'}} alt="Size Guide" />}
        </div>
    )
}

export default SizeDisplay