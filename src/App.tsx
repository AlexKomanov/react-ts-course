import './App.css'
import ListGroup from "./components/ListGroup.tsx";

function App() {

    const items = ["1", "2", "3", "4", "5"];

    return (
        <>
    <ListGroup items={items} heading="List"/>

        </>
    )
}

export default App
