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
    });

    const [game, setGame] = useState({
        id: 1,
        player: {
            name: "John"
        }
    });

    const [pizza, setPizza] = useState({
        name: 'Spicy Pepperoni',
        toppings: ['Mushroom']
    });

    const [cartItems, setCartItems] = useState(['Product 1', 'Product 2']);

    const [cart, setCart] = useState({
        discount: .1,
        items: [
            {id: 1, title: 'Product 1', quantity: 1},
            {id: 2, title: 'Product 2', quantity: 1}
        ]
    })

    const handleClick = () => {
        setPerson({...person, fullName: {...person.fullName, firstName: 'Alexander'} })
    }

    const changePlayerName = () => {
        setGame({...game, player: {...game.player, name: "Bob"}});
    }

    const addTopping = () => {
        setPizza({...pizza, toppings: [...pizza.toppings, "Cheese"]})
    }

    const changeQuantity = () => {
        setCart({...cart, items: cart.items.map(item => item.id === 1 ? {...item, quantity: item.quantity + 1} : item)})
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
            <div>*********************</div>
            <div>****** Updating State Exercise 1 *******</div>
            {game.player.name}
            <div>*********************</div>
            <div>*********************</div>
            <button onClick={changePlayerName}>Change Player Name</button>
            <div>*********************</div>
            <div>****** Updating State Exercise 2 *******</div>
            Pizza '{pizza.name}' toppings:
            <ul>
            {pizza.toppings.map(item => <li>{item}</li>)}
            </ul>
            <div>*********************</div>
            <div>*********************</div>
            <button onClick={addTopping}>Add Topping</button>
            <div>****** Updating State Exercise 3 *******</div>
            Items
            <ul>
                {cart.items.map(item => <li>{item.id} {item.title} {item.quantity}</li>)}
            </ul>
            <div>*********************</div>
            <div>*********************</div>
            <button onClick={changeQuantity}>Change Quantity</button>
        </>
    )
}

export default App;
