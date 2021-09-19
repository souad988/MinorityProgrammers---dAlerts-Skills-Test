import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header  from './header';

import Home from './home';
import './home.css'
function App() {
  return (
    <div className="app">
     <Router>
        <Switch>

          <Route path="/">
          <Header/>
          <Home/>
          </Route>
          </Switch>
          </Router>
    </div>
  );
}

export default App;
