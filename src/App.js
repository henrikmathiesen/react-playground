import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

import Menu from './Components/Layout/Menu'
import ViewsContainer from "./Components/Layout/ViewsContainer";

function App() {
  return (
    <div>
      <h1>React Playground</h1>
      <hr />
      <Router>
        <Menu />
        <ViewsContainer />
      </Router>
    </div>
  );
}

export default App;
