import { Switch, Route, useRouteMatch, NavLink } from 'react-router-dom';
import FirstHookUseState from './Lab/FirstHookUseState';

function Hooks() {
    const match = useRouteMatch();

    return (
        <>
            <h2>Hooks</h2>
            <p>
                Use state and lifecykle methods inside a funtional component.
            </p>
            <p>
                No need for classes, no need to worry about this.
            </p>
            <h3>The 3 most commonly used hooks</h3>
            <ul>
                <li>useState</li>
                <li>useRef</li>
                <li>useEffect</li>
            </ul>

            <hr />
            <nav>
                <ul>
                    <li><NavLink to={`${match.url}/first-hook-use-state`}>Lets try a first hook useState</NavLink></li>
                    {/* <li><NavLink to={`${match.url}/first-hook-use-ref`}>Lets try a first hook</NavLink></li> */}
                </ul>
            </nav>
            <hr />

            <Switch>
                <Route path={`${match.path}/first-hook-set-state`}>
                    <FirstHookUseState />
                </Route>
            </Switch>

        </>
    );
}

export default Hooks;
