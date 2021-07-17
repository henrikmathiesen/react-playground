import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Item from './Item';
import ItemsList from './Items-list';

function Items() {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route path={`${match.path}/:itemId`}>
                <Item />
            </Route>
            <Route path={match.path}>
                <ItemsList />
            </Route>
        </Switch>
    );
}

export default Items;
