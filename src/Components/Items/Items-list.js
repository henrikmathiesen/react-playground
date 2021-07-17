import { NavLink, useRouteMatch } from "react-router-dom";

function ItemsList() { 
    const match = useRouteMatch();

    return(
        <div>
            <h2>Items</h2>
            <nav>
                <ul>
                    <li>
                        <NavLink to={`${match.url}/1`}>Items ID: 1</NavLink>
                    </li>
                    <li>
                        <NavLink to={`${match.url}/2`}>Items ID: 2</NavLink>
                    </li>
                    <li>
                        <NavLink to={`${match.url}/3`}>Items ID: 3</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default ItemsList;
