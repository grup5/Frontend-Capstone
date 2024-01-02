const List = ({parsedData}) => {
    return (
    <ul id="description-list">
        {parsedData.map((item, index) => (
            Object.keys(item).map(key => {
                if (key.includes('com')) {
                    return (
                        <li key={`${index}_${key}`} style={{fontFamily: 'Fjalla One, sans-serif'}}>
                            {item[key]}
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