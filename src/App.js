import { BrowserRouter as Router } from 'react-router-dom';

import Menu from './Components/Layout/Menu'
import ViewsContainer from './Components/Layout/ViewsContainer';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>React Playground</h1>
          <hr />
        </div>
      </div>
      <Router>
        <div className="row gx-5">
          <div className="col-md-auto">
            <Menu />
          </div>
          <div className="col">
            <ViewsContainer />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
