import './App.css'
import ListGroup from "./components/ListGroup.tsx";
import Alert from "./components/Alert.tsx";

function App() {

    const items = ["1", "2", "3", "4", "5"];

    const handleSelectItem = (item: string) => {
        console.log('item', item);
    }

    return (
        <>
            <Alert >
                Hello <strong>World</strong>
            </Alert>
            <ListGroup items={items} heading="List" onSelectItem={handleSelectItem}/>

        </>
    )
}

export default App
