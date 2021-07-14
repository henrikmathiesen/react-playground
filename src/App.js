import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink 
} from "react-router-dom";
import './App.css';

import Home from './Components/Home/Home';
import Basics from "./Components/Basics/Basics";
import Transclusion from "./Components/Transclusion/Transclusion";
import Hooks from "./Components/Hooks/Hooks";

function App() {
  return (
    <div className="App">
      <h1>React Playground</h1>
      <hr />

      <Router>
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

        <Switch>
          <Route path="/basics">
            <Basics />
          </Route>
          <Route path="/transclusion">
            <Transclusion />
          </Route>
          <Route path="/hooks">
            <Hooks />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
