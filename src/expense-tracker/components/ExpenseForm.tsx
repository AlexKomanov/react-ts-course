import {categories} from "../../App.tsx";

const ExpenseForm = () => {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input id="description" type="text" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">Amount</label>
                <input id="amount" type="number" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <select id="category" className="form-control">
                    <option value=""></option>
                    {categories.map(item => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    );
};

export default ExpenseForm;