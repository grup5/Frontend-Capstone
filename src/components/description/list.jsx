const List = ({parsedData}) => {
    return (
    <ul id="description-list">
        {parsedData.map((item, index) => (
            Object.keys(item).map(key => {
                if (key.includes('com')) {
                    return (
                        <li key={`${index}_${key}`}>
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