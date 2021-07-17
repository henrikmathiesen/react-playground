import { Switch, Route } from "react-router-dom";

import Home from '../Home/Home';
import Basics from "../Basics/Basics";
import Transclusion from "../Transclusion/Transclusion";
import Hooks from "../Hooks/Hooks";
import Items from "../Items/Items";

function ViewsContainer() { 

    return(
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
          <Route path="/items">
            <Items />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    );

}

export default ViewsContainer;
