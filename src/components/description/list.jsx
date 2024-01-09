const List = ({parsedData, dot}) => {
    return (
    <ul id="descriptionlistcontainer">
        {parsedData.map((item, index) => (
            Object.keys(item).map(key => {
                if (key.includes('com')) {
                    return (
                        <li key={`${index}_${key}`} className='descriptionlist'>
                            {dot && <img src={dot} className='dot' alt="Dot" />}{item[key]}
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