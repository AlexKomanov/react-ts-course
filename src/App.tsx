import './App.css'
import ExpenseList from "./expense-tracker/components/ExpenseList.tsx";
import {useState} from "react";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter.tsx";


function App() {

    const [selectedCategory, setSelectedCategory] = useState("")
    const [expenses, setExpenses] = useState([
        {id: 1, description: 'lorem ipsum 1', amount: 10, category: 'groceries'},
        {id: 2, description: 'lorem ipsum 2', amount: 20, category: 'utilities'},
        {id: 3, description: 'lorem ipsum 3', amount: 30, category: 'groceries'},
        {id: 4, description: 'lorem ipsum 4', amount: 40, category: 'groceries'},
    ])

    const visibleExpenses = selectedCategory
        ? expenses.filter(item => item.category === selectedCategory)
        : expenses

    return (
        <>
            {/*<Form/>*/}
            <div className={"mb-3"}>
                <ExpenseFilter onSelectCategory={category => setSelectedCategory(category)}/>
            </div>
            <ExpenseList expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter(item => item.id != id))}/>
        </>
    )
}

export default App;
