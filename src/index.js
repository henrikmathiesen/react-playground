import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/* 

  TODO:

    # Routing
    # Views
    # Sass compiler (NOT node-sass)
    # Bootstrap partial
    # Hooks
    # Transclusion
    # Ev Tabset with tabs


  INFO:

    For absolute imports, create a jsconfig.json file in the root folder with:
    {
      "compilerOptions": {
          "baseUrl": "./src/"
      }
    }

    Then import with:
    import Home from Components/Home/Home

    There is also a .env file (see redux-repetition), but it doesnt seem to matter for this.


*/
