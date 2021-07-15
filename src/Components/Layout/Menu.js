import { NavLink } from "react-router-dom";

function Menu() {

    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/">Home</NavLink >
                </li>
                <li>
                    <NavLink to="/basics">Basics</NavLink>
                </li>
                <li>
                    <NavLink to="/transclusion">Transclusion</NavLink>
                </li>
                <li>
                    <NavLink to="/hooks">Hooks</NavLink>
                </li>
            </ul>
        </nav>
    );

}

export default Menu;
