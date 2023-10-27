import './App.css'
import {useState} from "react";

function App() {

    const [person, setPerson] = useState({
        fullName: {
            firstName: 'Alex',
            lastName: 'Komanov'
        },
        age: 35
    })

    const handleClick = () => {
        setPerson({...person, fullName: {...person.fullName, firstName: 'Alexander'} })
    }


    return (
        <>
            {person.fullName.firstName} {person.age}
            <div>*********************</div>
            <button onClick={handleClick}>Click Me</button>
        </>
    )
}

export default App;
