const List = ({parsedData, dot}) => {
    return (
    <ul id="description-list" style={{marginBottom: '4px', paddingTop:'8px', paddingInlineStart:'35px'}}>
        {parsedData.map((item, index) => (
            Object.keys(item).map(key => {
                if (key.includes('com')) {
                    return (
                        <li key={`${index}_${key}`} style={{listStyleType: 'none', fontFamily: 'Fjalla One, sans-serif', color: '#333', fontSize: '18px', paddingTop: '6px', textAlign: 'left'}}>
                            {dot && <img src={dot} style={{width:'16px', marginRight:'8px'}}alt="Dot" />}{item[key]}
                        </li>
                    );
                }
                return null;
            })
        ))}
    </ul>
    )
}

export default List