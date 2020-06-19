import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Login from "./components/Login";
import Registry from "./components/Registry";
import Options from "./components/Options";
import Breakfast from "./components/Breakfast";
import Lunch from "./components/Lunch";
import Chef from "./components/Chef";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/registry">
          <Registry />
        </Route>
        <Route path="/options">
        <Options />
        </Route>
        <Route path="/breakfast">
        <Breakfast />
        </Route>
        <Route path="/lunch">
        <Lunch />
        </Route>
        <Route path="/chef">
        <Chef />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
