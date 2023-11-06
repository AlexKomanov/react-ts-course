import './App.css'
import ExpenseList from "./expense-tracker/components/ExpenseList.tsx";
import {useState} from "react";


function App() {

    const [expenses, setExpenses] = useState([
        {id: 1, description: 'lorem ipsum 1', amount: 10, category: 'Utils'},
        {id: 2, description: 'lorem ipsum 2', amount: 20, category: 'Tools'},
        {id: 3, description: 'lorem ipsum 3', amount: 30, category: 'Tools'},
        {id: 4, description: 'lorem ipsum 4', amount: 40, category: 'Utils'},
    ])

    return (
        <>
            {/*<Form/>*/}
            
            <ExpenseList expenses={expenses} onDelete={(id) => setExpenses(expenses.filter(item => item.id != id))} />
        </>
    )
}

export default App;
