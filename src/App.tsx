import './App.css'
import {useState} from "react";
import NavBar from "./components/NavBar.tsx";
import Cart from "./components/Cart.tsx";

function App() {

    const [person, setPerson] = useState({
        fullName: {
            firstName: 'Alex',
            lastName: 'Komanov'
        },
        age: 35
    })

    const [cartItems, setCartItems] = useState(['Product 1', 'Product 2'])

    const handleClick = () => {
        setPerson({...person, fullName: {...person.fullName, firstName: 'Alexander'} })
    }


    return (
        <>
            {person.fullName.firstName} {person.age}
            <div>*********************</div>
            <button onClick={handleClick}>Click Me</button>
            <div>*********************</div>
            <div>*********************</div>
            <NavBar cartItemsCount={cartItems.length}/>
            <Cart cartItems={cartItems} onClear={() => setCartItems([])}/>
        </>
    )
}

export default App;
