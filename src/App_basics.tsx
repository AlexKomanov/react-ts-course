import './App.css'
import ListGroup from "./components/ListGroup.tsx";
import Alert from "./components/Alert.tsx";
import ButtonComponent from "./components/ButtonComponent.tsx";
import {useState} from "react";
import { BsFillCalendarFill } from 'react-icons/bs'
import Like from "./components/Like.tsx";

function App() {

    const items = ["1", "2", "3", "4", "5"];

    const handleSelectItem = (item: string) => {
        console.log('item', item);
    }

    const [showAlert, setShowAlert] = useState(false)

    return (
        <>
            {
                showAlert && <Alert onClose={() => setShowAlert(false)}>
                    Hello <strong>World</strong>
                </Alert>
            }
            <ButtonComponent onHandleClick={() => setShowAlert(true)}>
                Open Alert
            </ButtonComponent>
            <ButtonComponent type="success" onHandleClick={() => setShowAlert(false)}>
                Close Alert
            </ButtonComponent>
            <ListGroup items={items} heading="List" onSelectItem={handleSelectItem}/>
            <BsFillCalendarFill />
            <BsFillCalendarFill color="red" size="40"/>
            <div style={{margin: 20}}>
                <Like onClick={() => console.log("Clicked the button")}/>
            </div>
        </>
    )
}

export default App
