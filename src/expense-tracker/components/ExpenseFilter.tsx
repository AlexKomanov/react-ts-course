import categories from "../categories.ts";


interface Props {
    onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({onSelectCategory}: Props) => {
    return (
        <select className={"form-select"} onChange={(event) => onSelectCategory(event.target.value)}>
            <option value="">All Categories</option>
            {categories.map(item => (
                <option  key={item} value={item}>{item}</option>
            ))}

        </select>
    );
};

export default ExpenseFilter;