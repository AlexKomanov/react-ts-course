import {ReactNode} from "react";

interface Props {
    type?: "primary" | "secondary" | "success" | "danger";
    children: ReactNode;
    onHandleClick: () => void;
}


const ButtonComponent = ({type = "primary", children, onHandleClick}:Props) => {
    return (
        <button type="button" className={`btn btn-${type}`} onClick={onHandleClick}>
            {children}
        </button>
    );
};

export default ButtonComponent;