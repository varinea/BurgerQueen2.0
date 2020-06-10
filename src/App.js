import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Login from "./components/Login";
import Registro from "./components/Registro";
import MeseroUno from "./components/MeseroUno";
import MeseroDos from "./components/MeseroDos";
import MeseroTres from "./components/MeseroTres";
import Cocina from "./components/Cocina";


function App() {
  return (
    <Router>
    <div className="container">
      <h1>Hola!.</h1>
      <hr />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/registro">
          <Registro />
        </Route>
        <Route path="/meseroUno">
        <MeseroUno />
        </Route>
        <Route path="/meseroDos">
        <MeseroDos />
        </Route>
        <Route path="/meseroTres">
        <MeseroTres />
        </Route>
        <Route path="/cocina">
        <Cocina />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
