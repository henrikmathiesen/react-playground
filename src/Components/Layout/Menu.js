import { NavLink } from "react-router-dom";
import './Menu.scss';

function Menu() {

    return (
        <nav>
            <ul className="Menu-list">
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
                <li>
                    <NavLink to="/items">Items</NavLink>
                </li>
                <li>
                    <NavLink to="/items/1">Items ID: 1</NavLink>
                </li>
            </ul>
        </nav>
    );

}

export default Menu;
