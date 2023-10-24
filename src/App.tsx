import './App.css'
import ListGroup from "./components/ListGroup.tsx";

function App() {

    const items = ["1", "2", "3", "4", "5"];

    const handleSelectItem = (item: string) => {
        console.log('item', item);
    }

    return (
        <>
            <ListGroup items={items} heading="List" onSelectItem={handleSelectItem}/>

        </>
    )
}

export default App
