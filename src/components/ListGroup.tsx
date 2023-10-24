import {useState} from "react";

interface Props {
    items: string[];
    heading: string;
}
const ListGroup = ({items, heading}: Props) => {



    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No item was found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                        <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                            key={index} onClick={() => setSelectedIndex(index)}>Item {item}</li>
                    )
                )}

            </ul>
        </>
    )
}

export default ListGroup;