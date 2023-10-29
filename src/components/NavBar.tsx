interface Props {
    cartItemsCount: number
}

const NavBar = ({cartItemsCount}: Props) => {

    return (
        <div>
            Items count: {cartItemsCount}
        </div>
    );
};

export default NavBar;