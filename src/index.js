import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';
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

    # Bootstrap partial
    # Hooks
    # Transclusion
    # Ev Tabset with tabs


  INFO:

    ABSOLUTE IMPORTS
  
    For absolute imports, create a jsconfig.json file in the root folder with:
    {
      "compilerOptions": {
          "baseUrl": "./src/"
      }
    }

    Then import with:
    import Home from Components/Home/Home

    There is also a .env file (see redux-repetition), but it doesnt seem to matter for this.


    CSS

    Not scoped like Angular


    REACT ICONS

    https://react-icons.github.io/react-icons


    BOOTSTRAP THEMING

    https://create-react-app.dev/docs/adding-a-sass-stylesheet          IMPORTANT, use npm install sass -S instead of node-sass
    https://create-react-app.dev/docs/adding-bootstrap
    https://getbootstrap.com/docs/5.0/customize/color/
    https://flatuicolors.com/palette/defo


    SASS IMPORTS

    sass folder: 
      index.scss imports settings that overrides bootstraps settings (for theming), and bootstrap
      Here we can also place _mixins.scss

    Components can import _settings.scss, _mixins.scss and also bootstraps files for variables and mixins
    @import "~bootstrap/scss/functions";
    @import "~bootstrap/scss/variables";
    @import "~bootstrap/scss/mixins";

    Would be trouble using a combined component-dependencies file, since that file should then include bootstrap settings
    and would be used in index.scss preferebly, but all of bootstrap, including its settings file is already there.

    // Basics.scss
    @import '/src/sass/settings';
    @import "~bootstrap/scss/functions";
    @import "~bootstrap/scss/variables";

    // Basics.js
    import './Basics.scss';


*/
