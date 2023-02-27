const Dropdown = ({changeFood}) => {
    return (
        <nav>
            <h2>Dropdown Components</h2>
            <select className="menu" onChange={changeFood}>
                <option className="menulist">Menu</option>
                <option className="puff-fry">Puff-Fry</option>
                <option className="curry-tomyum">Curry-Tomyum</option>
                <option className="steak">Steak</option>
                <option className="drink">Drink</option>
            </select>
        </nav>
    )
}

export default Dropdown