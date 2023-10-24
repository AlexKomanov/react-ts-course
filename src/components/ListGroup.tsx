const ListGroup = () => {

    const items = [1, 2, 3, 4, 5];

    const handleClick = (event: MouseEvent) => {
        console.log(event.target);
    }

    return (
        <>
            <h1>List Group Component</h1>
            {items.length === 0 && <p>No item was found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                        <li className="list-group-item" key={index} onClick={handleClick}>Item {item}</li>
                    )
                )}

            </ul>
        </>
    )
}

export default ListGroup;